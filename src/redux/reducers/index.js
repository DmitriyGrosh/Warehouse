import {combineReducers} from "@reduxjs/toolkit";

import {wareHouseReducer} from "./warehouses";
import {productsReducer} from "./products";
import {defaultWarehouseReducer} from "./unallocated";

export const newRootReducer = combineReducers({
  products: productsReducer,
  warehouse: wareHouseReducer,
  unallocated: defaultWarehouseReducer
});