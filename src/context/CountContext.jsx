// import React, { createContext, useState } from 'react';


// export const CountContext = createContext();

// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// };

// import React, { createContext, useState } from 'react';


// export const CountContext = createContext({
//   count: 0,
//   setCount: () => {}
// });


// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

// Create the CountContext
export const CountContext = createContext();

// Create a provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value = {{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
