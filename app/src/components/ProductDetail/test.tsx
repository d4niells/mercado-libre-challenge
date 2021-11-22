import { render } from 'common/tests';

import { ProductDetail as TProductDetail } from 'api/core';

import ProductDetail from '.';

const PRODUCT_BASE: TProductDetail = {
  id: 'ML',
  condition: 'new',
  free_shipping: true,
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

describe('<ProductDetail />', () => {
  it('should render product detail correctly', () => {
    const { container } = render(<ProductDetail data={PRODUCT_BASE} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
