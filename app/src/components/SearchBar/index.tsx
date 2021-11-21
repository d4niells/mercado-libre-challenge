import { useState, ChangeEvent, useEffect, KeyboardEvent } from 'react';
import Image from 'next/image';

import * as S from './styles';

type Props = {
  value: string;
  loading: boolean;
  onSubmit(value: string): void;
};

const SearchBar = ({ value, loading, onSubmit }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(searchValue);
    }
  };

  const handleSubmit = () => {
    onSubmit(searchValue);
  };

  return (
    <S.Wrapper>
      <S.Input
        name="search"
        value={searchValue}
        onKeyDown={handleKeyDown}
        onChange={handleSearchChange}
        placeholder="Buscar produtos, marcas e muito mais..."
      />
      <S.Button
        aria-label="Search"
        disabled={loading || !searchValue.length}
        onClick={handleSubmit}
      >
        <Image src="/img/ic_Search.png" width="20px" height="20px" />
      </S.Button>
    </S.Wrapper>
  );
};

export default SearchBar;
