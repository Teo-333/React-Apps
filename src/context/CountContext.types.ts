import { ReactNode } from 'react';

export interface CountContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface CountProviderProps {
  children: ReactNode;
}
