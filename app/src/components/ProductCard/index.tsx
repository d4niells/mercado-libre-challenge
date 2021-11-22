import { Product } from 'api/core';

import { formatPrice } from 'common/helpers';

import * as S from './styles';

type Props = {
  product: Product;
  onClick(): void;
};

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <S.Card onClick={onClick}>
      <S.Image loading="lazy" src={product.picture} />
      <S.ContentWrapper>
        <S.Price>{formatPrice(product.price)}</S.Price>
        <S.Title>{product.title}</S.Title>
      </S.ContentWrapper>
    </S.Card>
  );
};

export default ProductCard;
