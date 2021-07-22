import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType";

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
};

export const removeFromCart = (cartItem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cartItem,
  };
};
