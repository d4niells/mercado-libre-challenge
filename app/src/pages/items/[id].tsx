import { GetProductResponse, MercadoLivre } from 'api/core';

import { useCategories } from 'contexts/category';

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
  const { categories } = useCategories();

  return (
    <DefaultLayout>
      <SectionCategories categories={categories} />
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
