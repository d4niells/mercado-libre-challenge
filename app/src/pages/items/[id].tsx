import { useRouter } from 'next/router';
import styled from 'styled-components';

import { GetProductResponse, MercadoLivre } from 'api/core';

import { useCategories } from 'contexts/category';

import Main from 'components/Main';
import Button from 'components/Common/Button';
import Detail from 'components/ProductDetail';
import SectionCategories from 'components/SectionCategories';

import DefaultLayout from 'layouts/default';
import { useSearch } from 'contexts/search';

type Context = {
  query: {
    id: string;
  };
};

type Props = {
  data: GetProductResponse;
};

const ProductDetail = ({ data: { item } }: Props) => {
  const router = useRouter();
  const { searchedValue } = useSearch();
  const { categories } = useCategories();

  const goToListResults = () => {
    router.push({ pathname: '/items', query: `search=${searchedValue}` });
  };

  return (
    <DefaultLayout>
      <Wrapper>
        <Button onClick={goToListResults}>Voltar a lista | </Button>
        <SectionCategories categories={categories} />
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export { getServerSideProps };
export default ProductDetail;
