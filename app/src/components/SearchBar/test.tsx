import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from 'common/tests';

import SearchBar from '.';

describe('<SearchBar />', () => {
  const SEARCH_VALUE = 'ps4';

  it('should submit the value when clicking the search button', () => {
    const onSubmit = jest.fn();

    const { rerender } = render(
      <SearchBar value="" loading={false} onSubmit={onSubmit} />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      cursor: 'not-allowed'
    });

    userEvent.type(input, SEARCH_VALUE);

    expect(input).toHaveValue(SEARCH_VALUE);
    expect(button).toBeEnabled();
    expect(button).toHaveStyle({
      cursor: 'poiter'
    });

    userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(SEARCH_VALUE);

    rerender(<SearchBar value="" loading={true} onSubmit={onSubmit} />);

    expect(button).toBeDisabled();
  });
});
