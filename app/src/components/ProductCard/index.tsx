import Image from 'next/image';

import { Product } from 'api/core';

import Price from 'components/Price';

import * as S from './styles';

type Props = {
  data: Product;
  onClick(): void;
};

const ProductCard = ({ data, onClick }: Props) => {
  return (
    <S.Card data-testid="product-card" onClick={onClick}>
      <S.Image loading="lazy" src={data.picture} alt="Imagem do produto" />
      <S.ContentWrapper>
        <S.Price>
          <Price size="sm" price={data.price} />
          {data.free_shipping ? (
            <figure>
              <Image
                src="/img/ic_shipping.png"
                width="20px"
                height="20px"
                alt="Icon redondo com cor de fundo verde e ao centro um caminhão na cor preta informando entrega grátis"
              />
            </figure>
          ) : null}
        </S.Price>
        <S.Title>{data.title}</S.Title>
      </S.ContentWrapper>
    </S.Card>
  );
};

export default ProductCard;
