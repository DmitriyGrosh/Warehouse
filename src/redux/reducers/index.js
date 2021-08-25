import {combineReducers} from "@reduxjs/toolkit";

import {wareHouseReducer} from "./warehouses";

export const newRootReducer = combineReducers({
  warehouse: wareHouseReducer
})