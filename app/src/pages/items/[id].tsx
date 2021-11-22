import { GetProductResponse, MercadoLivre } from 'api/core';

import Main from 'components/Main';
import Detail from 'components/ProductDetail';
import SectionCategories from 'components/SectionCategories';

import DefaultLayout from 'layouts/default';

type Context = {
  query: {
    id: string;
  };
};

type Props = {
  data: GetProductResponse;
};

const ProductDetail = ({ data: { item } }: Props) => {
  return (
    <DefaultLayout>
      <SectionCategories categories={[]} />
      <Main>
        <Detail data={item} />
      </Main>
    </DefaultLayout>
  );
};

const getServerSideProps = async ({ query }: Context) => {
  const data = await MercadoLivre.getProductById(query.id);
  return {
    props: {
      data: data
    }
  };
};

export { getServerSideProps };
export default ProductDetail;
