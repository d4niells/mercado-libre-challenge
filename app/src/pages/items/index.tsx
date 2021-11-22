import { useRouter } from 'next/router';

import { MercadoLivre } from 'api/core';
import { SearchResponse } from 'api/core';

import { useCategories } from 'contexts/category';

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
  const router = useRouter();
  const { saveCategories } = useCategories();

  const goToProductDetail = (productId: string) => {
    router.push(`items/${productId}`);
  };

  return (
    <DefaultLayout>
      <SectionCategories categories={data[0].categories} />
      <Main>
        <ol>
          {data.map(({ author, items, categories }) => {
            return items.map((item) => (
              <ProductCard
                key={author.name}
                product={item}
                onClick={() => {
                  saveCategories(categories);
                  goToProductDetail(item.id);
                }}
              />
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
