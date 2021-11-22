import {
  useMemo,
  useState,
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
  const [categories, setCategories] = useState<string[]>([]);

  const saveCategories = useCallback((value: string[]) => {
    setCategories(value);
  }, []);

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
