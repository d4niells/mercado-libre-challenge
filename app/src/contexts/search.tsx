import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren
} from 'react';

type SearchContext = {
  searchedValue: string;
  saveSearch(value: string): void;
};

const SearchContext = createContext<SearchContext | null>(null);

export const SearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [searchedValue, setSearchedValue] = useState('');

  const saveSearch = useCallback((value: string) => {
    setSearchedValue(value);
  }, []);

  const value = useMemo(
    () => ({
      saveSearch,
      searchedValue
    }),
    [saveSearch, searchedValue]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = (): SearchContext => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchContext');
  }

  return context;
};
