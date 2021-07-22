import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  getProductsReducer,
  cartReducer,
});

export default rootReducer;
