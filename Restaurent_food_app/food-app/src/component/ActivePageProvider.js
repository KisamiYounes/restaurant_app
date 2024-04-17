import React, { createContext, useState } from 'react';

export const ActivePageContext = createContext();

const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('Home');

  const handleNavigation = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <ActivePageContext.Provider value={{ activePage, handleNavigation }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageProvider;
