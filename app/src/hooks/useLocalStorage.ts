import { useCallback, useMemo } from 'react';

type Keys = 'search' | 'categories';

const prefix = (key: Keys) => {
  return `@ml:${key}`;
};

const useLocalStorage = () => {
  const getItem = useCallback(<T>(key: Keys): T | null => {
    const storedItem = localStorage.getItem(prefix(key));
    if (storedItem) {
      return JSON.parse(storedItem);
    }

    return null;
  }, []);

  const setItem = useCallback((key: Keys, data: unknown) => {
    const dataToStore = JSON.stringify(data);
    localStorage.setItem(prefix(key), dataToStore);
  }, []);

  const value = useMemo(
    () => ({
      getItem,
      setItem
    }),
    [getItem, setItem]
  );

  return value;
};

export default useLocalStorage;
