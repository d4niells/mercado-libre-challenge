import { MercadoLivre } from 'api/core';
import { SearchResponse } from 'api/core';

import Main from 'components/Main';
import ProductCard from 'components/ProductCard';
import SectionCategories from 'components/SectionCategories';

import DefaultLayout from 'layouts/default';

type Context = {
  query: {
    search: string;
  };
};

type Props = {
  data: SearchResponse[];
};

const Products = ({ data }: Props) => {
  return (
    <DefaultLayout>
      <SectionCategories categories={data[0].categories} />
      <Main>
        <ol>
          {data.map(({ author, items }) => {
            return items.map((item) => (
              <ProductCard key={author.name} product={item} />
            ));
          })}
        </ol>
      </Main>
    </DefaultLayout>
  );
};

const getServerSideProps = async ({ query }: Context) => {
  const data = await MercadoLivre.searchProducts(query.search);
  return {
    props: {
      data: data
    }
  };
};

export { getServerSideProps };
export default Products;
