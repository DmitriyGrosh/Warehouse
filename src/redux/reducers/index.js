import {combineReducers} from "@reduxjs/toolkit";

import {wareHouseReducer} from "./warehouses";
import {productsReducer} from "./products";

export const newRootReducer = combineReducers({
  products: productsReducer,
  warehouse: wareHouseReducer,
})