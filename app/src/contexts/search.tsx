import { useLocalStorage } from 'hooks';
import {
  useMemo,
  useState,
  useEffect,
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
  const storege = useLocalStorage();

  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    const storedValue = storege.getItem<string>('search');
    storedValue && setSearchedValue(storedValue);
  }, [storege]);

  const saveSearch = useCallback(
    (value: string) => {
      setSearchedValue(value);
      storege.setItem('search', value);
    },
    [storege]
  );

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
