// src/UserDataContext.js
import React, { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [usersData, setUsersData] = useState({});

  const getUserData = (username) => {
    return usersData[username];
  };

  const setUserData = (username, data) => {
    setUsersData((prev) => ({ ...prev, [username]: data }));
  };

  return (
    <UserDataContext.Provider value={{ getUserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
