import { ProductDetail as TProductDetail } from 'api/core';

import { formatPrice } from 'common/helpers';

import * as S from './styles';

type Props = {
  data: TProductDetail;
};

const ProductDetail = ({ data }: Props) => {
  const condition = data.condition === 'new' ? 'Nuevo' : 'Usado';
  const label = data.sold_quantity > 1 ? 'vendidos' : 'vendido';

  return (
    <S.Container>
      <S.Wrapper>
        <S.Image
          src={data.picture}
          alt="Image do produto no tamanho 680x460 ao lado das informações do produto"
        />
        <S.PaymentInfo>
          <h3>
            {condition} - {data.sold_quantity} {label}
          </h3>
          <h2>{data.title}</h2>
          <h1>{formatPrice(data.price)}</h1>
          <S.Button>Comprar</S.Button>
        </S.PaymentInfo>
      </S.Wrapper>
      <S.Description>
        <h1>Descripción del producto</h1>
        <p>{data.description}</p>
      </S.Description>
    </S.Container>
  );
};

export default ProductDetail;
