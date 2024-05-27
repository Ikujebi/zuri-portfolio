// NightModeContext.js
import React, { createContext, useState, useContext } from 'react';

const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => useContext(NightModeContext);
