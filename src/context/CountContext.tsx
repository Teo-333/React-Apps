import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { CountContextProps, CountProviderProps } from './CountContext.types';

const defaultContextValue: CountContextProps = {
  count: 0,
  setCount: () => {} 
};

export const CountContext = createContext<CountContextProps>(defaultContextValue);

export const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

