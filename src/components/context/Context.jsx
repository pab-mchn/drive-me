import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
