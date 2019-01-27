import * as React from 'react';
import PropTypes from 'prop-types';
import toRegex from 'path-to-regexp';
import createHistory from 'history/createBrowserHistory';

export function matchURI(path, uri) {
  return toRegex(path, []).exec(uri);
}

const history = createHistory();

export const HistoryContext = React.createContext({
  pathname: '',
  redirectTo: () => {},
});

export default class Router extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired,
      }),
    ).isRequired,
    children: PropTypes.func.isRequired,
  };
  unlisten;
  state = { component: '', pathname: '' };

  componentDidMount() {
    console.log('Router Mount');
    this.handleHistory(history.location);
    this.unlisten = history.listen(this.handleHistory);
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  redirectTo(pathname) {
    history.push(pathname);
  }

  resolve(routes, uri) {
    for (const route of routes) {
      const match = matchURI(route.path, uri);
      if (match != null) return route.render(match);
    }
    throw new Error('Not found');
  }

  handleHistory = history => {
    const { pathname } = history;
    const component = this.resolve(this.props.routes, pathname);
    this.setState({ component, pathname });
  };

  render() {
    const { component, pathname } = this.state;
    return (
      <HistoryContext.Provider
        value={{ pathname, redirectTo: this.redirectTo }}
      >
        {this.props.children(component)}
      </HistoryContext.Provider>
    );
  }
}
