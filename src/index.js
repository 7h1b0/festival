import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'components/Router';
import Devices from 'components/Devices';
import Converter from 'components/Converter';
import AddDevice from 'components/AddDevice';

const routes = [
  {
    path: '/',
    render: () => <Devices />,
  },
  {
    path: '/converter/:id',
    render: ([, deviceId]) => <Converter deviceId={deviceId} />,
  },
  {
    path: '/add',
    render: () => <AddDevice />,
  },
];

ReactDOM.render(
  <Router routes={routes}>{component => component}</Router>,
  document.getElementById('app'),
);
