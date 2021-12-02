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

type CategoryContext = {
  categories: string[];
  saveCategories(value: string[]): void;
};

const CategoryContext = createContext<CategoryContext | null>(null);

export const CategoryProvider = ({ children }: PropsWithChildren<unknown>) => {
  const storage = useLocalStorage();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const storedValue = storage.getItem<string[]>('categories');
    storedValue && setCategories(storedValue);
  }, [storage]);

  const saveCategories = useCallback(
    (value: string[]) => {
      setCategories(value);
      storage.setItem('categories', value);
    },
    [storage]
  );

  const value = useMemo(
    () => ({
      categories,
      saveCategories
    }),
    [categories, saveCategories]
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = (): CategoryContext => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategories must be used within an CategoryContext');
  }

  return context;
};
