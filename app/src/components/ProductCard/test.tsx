import { screen, waitFor } from '@testing-library/react';
import { render } from 'common/tests';

import { ProductDetail } from 'api/core';

import ProductCard from '.';
import userEvent from '@testing-library/user-event';

const PRODUCT_BASE: ProductDetail = {
  id: 'ML',
  condition: 'new',
  free_shipping: false,
  title: 'Product title',
  description: 'Product description',
  picture: 'http://http2.mlstatic.com/D_976592-MLA46432963374_062021-I.jpg',
  price: {
    amount: 144,
    currency: 'ARS',
    decimals: 2
  },
  sold_quantity: 3
};

describe('<ProductCard />', () => {
  const handleClick = jest.fn();

  it('should render product card correctly', () => {
    render(<ProductCard data={PRODUCT_BASE} onClick={handleClick} />);

    expect(
      screen.getByRole('img', {
        name: /imagem do produto/i
      })
    ).toHaveAttribute('src', PRODUCT_BASE.picture);

    expect(
      screen.getByRole('heading', {
        // eslint-disable-next-line no-irregular-whitespace
        name: /\$ 144,00/i
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/product title/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(/product-card/));

    expect(handleClick).toBeCalled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should show shipping icon when product shipping is free', async () => {
    const { rerender } = render(
      <ProductCard
        data={{
          ...PRODUCT_BASE,
          free_shipping: true
        }}
        onClick={handleClick}
      />
    );

    expect(
      screen.getByRole('img', {
        name: /icon redondo com cor de fundo verde e ao centro um caminhão na cor preta informando entrega grátis/i
      })
    ).toBeInTheDocument();

    rerender(
      <ProductCard
        data={{
          ...PRODUCT_BASE,
          free_shipping: false
        }}
        onClick={handleClick}
      />
    );

    await waitFor(() =>
      expect(
        screen.queryByRole('img', {
          name: /icon redondo com cor de fundo verde e ao centro um caminhão na cor preta informando entrega grátis/i
        })
      ).not.toBeInTheDocument()
    );
  });
});
