import { Product } from 'api/core';

import { formatPrice } from 'common/helpers';

import * as S from './styles';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <S.Card>
      <S.Image src={product.picture} />
      <S.ContentWrapper>
        <S.Price>{formatPrice(product.price)}</S.Price>
        <S.Title>{product.title}</S.Title>
      </S.ContentWrapper>
    </S.Card>
  );
};

export default ProductCard;
