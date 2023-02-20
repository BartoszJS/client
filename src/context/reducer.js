import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  UPLOAD_BEGIN,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,
  HANDLE_CHANGE,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CREATE_PRODUCT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_PRODUCT_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === CREATE_PRODUCT_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === UPLOAD_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPLOAD_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === UPLOAD_ERROR) {
    return { ...state, isLoading: false };
  }
  throw new Error("error");
};

export default reducer;
