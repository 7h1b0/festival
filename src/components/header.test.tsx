/** @jsx h */
import { h } from 'preact';
import { render, screen, fireEvent } from '@testing-library/preact';

import Header from './header';

describe('Header', () => {
  it('should display the festival name', () => {
    render(<Header title="Rock Werchter 2019" />);
    expect(screen.getByText('Rock Werchter 2019')).toBeVisible();
  });

  it('should be able to share the URL through Share API', () => {
    global.navigator.share = jest.fn();

    const title = 'Share';
    render(<Header title={title} />);
    fireEvent.click(screen.getByTitle('Share'));
    expect(global.navigator.share).toHaveBeenCalledWith({
      text: title,
      url: 'https://festival-converter.app/',
    });

    // @ts-expect-error
    global.navigator.share = null;
  });

  it('should display a copy URL helper when browser does not support share API', () => {
    // @ts-expect-error
    global.navigator.clipboard = {
      writeText: jest.fn(),
    };

    render(<Header title="Copy" />);

    fireEvent.click(screen.getByTitle('Copy URL'));
    expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(
      'https://festival-converter.app/',
    );
  });
});
