import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return <Context.Provider value={{ isOpen, openPopup, closePopup }}>{children}</Context.Provider>;
};

export default ContextProvider;
