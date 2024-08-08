// BooleanContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your context's value
interface BooleanContextType {
  value: boolean;
  setValue: (value: boolean) => void;
}

// Create a default value for your context
const defaultContextValue: BooleanContextType = {
  value: true,
  setValue: () => {},
};

// Create the context
const BooleanContext = createContext<BooleanContextType>(defaultContextValue);


interface BooleanContextProviderProps {
  children: ReactNode;
}

export const BooleanContextProvider: React.FC<BooleanContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<boolean>(true);

  return (
    <BooleanContext.Provider value={{ value, setValue }}>
      {children}
    </BooleanContext.Provider>
  );
};

export const useBooleanContext = () => useContext(BooleanContext);
