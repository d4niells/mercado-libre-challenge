import { screen } from '@testing-library/react';

import { render } from 'common/tests';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveStyleRule('background-color', '#FFE600');
    expect(
      screen.getByRole('img', {
        name: /imagem de duas mãos se comprimentando com um aperto de mãos\./i
      })
    );
  });
});
