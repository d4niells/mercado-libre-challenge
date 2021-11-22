import { useRouter } from 'next/router';

import Main from 'components/Main';
import SectionCategories from 'components/SectionCategories';

import DefaultLayout from 'layouts/default';

const ProductDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <DefaultLayout>
      <SectionCategories categories={[]} />
      <Main>
        <p>Product ID: {id}</p>
      </Main>
    </DefaultLayout>
  );
};

export default ProductDetail;
