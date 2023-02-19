import React, { useReducer, useState, useContext } from "react";

import reducer from "./reducer";

import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
} from "./actions";

const initialState = {
  isLoading: true,
  name: "",
  price: "",
  image: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createProduct = async (product) => {
    console.log(product);
  };

  return (
    <AppContext.Provider value={{ ...state, createProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
