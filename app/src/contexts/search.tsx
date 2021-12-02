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
  const storage = useLocalStorage();

  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    const storedValue = storage.getItem<string>('search');
    storedValue && setSearchedValue(storedValue);
  }, [storage]);

  const saveSearch = useCallback(
    (value: string) => {
      setSearchedValue(value);
      storage.setItem('search', value);
    },
    [storage]
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
