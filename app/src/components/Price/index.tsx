import { Price } from 'api/core';

import { formatPrice } from 'common/helpers';

import * as S from './styles';

type Props = {
  price: Price;
  size: keyof typeof S.sizes;
};

const CustomPrice = ({ price, size }: Props) => {
  const [fraction, cents] = formatPrice(price).split(',');

  return (
    <S.Price data-testid="product-price" size={size}>
      {fraction} <span>{cents}</span>
    </S.Price>
  );
};

export default CustomPrice;
