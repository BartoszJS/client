import React, { useReducer, useState, useContext } from "react";
import axios from "axios";

import reducer from "./reducer";

import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  UPLOAD_BEGIN,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,
  HANDLE_CHANGE,
} from "./actions";

const initialState = {
  isLoading: false,
  name: "",
  price: "",
  image: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const createProduct = async (product) => {
    dispatch({ type: CREATE_PRODUCT_BEGIN });
    try {
      const response = await axios.post("/api/v1/products", product);
      console.log(product);
      dispatch({ type: CREATE_PRODUCT_SUCCESS });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: CREATE_PRODUCT_ERROR });
    }
  };

  const uploadImage = async (photo) => {
    dispatch({ type: UPLOAD_BEGIN });
    try {
      const response = await axios.post("/api/v1/products/uploads", photo);
      console.log(photo);
      dispatch({ type: UPLOAD_SUCCESS });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: UPLOAD_ERROR });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, createProduct, handleChange, uploadImage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
