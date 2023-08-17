import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [displayBlockData, setDisplayBlockData] = useState(null);

  return (
    <DataContext.Provider value={{ displayBlockData, setDisplayBlockData }}>
      {children}
    </DataContext.Provider>
  );
}
