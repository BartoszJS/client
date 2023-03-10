import React, { useReducer, useState, useContext } from "react";

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
import axios from "axios";

const initialState = {
  isLoading: true,
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
      await axios.post("/api/v1/products", product);
      dispatch({ type: CREATE_PRODUCT_SUCCESS });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: CREATE_PRODUCT_ERROR });
    }
  };
  const uploadImage = async (formData) => {
    dispatch({ type: UPLOAD_BEGIN });
    try {
      await axios.post("api/v1/products/uploads", formData);
      dispatch({ type: UPLOAD_SUCCESS });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: UPLOAD_ERROR });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, createProduct, uploadImage, handleChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
