import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/actionType";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case REMOVE_FROM_CART:
      var newState2 = state.filter((c) => c.product.id !== action.payload.id);
      return newState2;
    default:
      return state;
  }
};

export default cartReducer;
