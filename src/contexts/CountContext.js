import React, { createContext, useContext, useState } from "react";

const CountContext = createContext(null);

export const useCount = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleAddition = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <CountContext.Provider value={{ count, handleAddition }}>
      {children}
    </CountContext.Provider>
  );
};
