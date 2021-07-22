import { GET_PRODUCTS_SUCCESS } from "../action/actionType";

const initialState = {
  products: [],
};

const getProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default getProductsReducer;
