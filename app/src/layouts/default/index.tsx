import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { useSearch } from 'contexts/search';

import Header from 'components/Header';
import SearchBar from 'components/SearchBar';

import * as S from './styles';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  const router = useRouter();

  const { searchedValue, saveSearch } = useSearch();

  const onSearch = (value: string) => {
    saveSearch(value);
    router.push(`items?search=${value}`);
  };

  return (
    <S.Container>
      <Header>
        <SearchBar value={searchedValue} loading={false} onSubmit={onSearch} />
      </Header>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default DefaultLayout;
