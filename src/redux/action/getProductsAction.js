import axios from "axios";
import { GET_PRODUCTS_SUCCESS } from "./actionType";

export const getProductsSuccess = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProducts = () => {
  return function (dispatch) {
    // Fetch
    /*
    let url = "http://localhost:3000/products"
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsSuccess(data))); 
    */

    // Axios
    let url = "http://localhost:3000/products";
    return axios.get(url).then((res) => dispatch(getProductsSuccess(res.data)));
  };
};
