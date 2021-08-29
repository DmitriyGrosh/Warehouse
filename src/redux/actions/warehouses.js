import {ADD_PRODUCT_TO_WAREHOUSE} from "../types/warehouse";
import {ADD_WAREHOUSE} from "../types/warehouse";

export const addProduct = (value) => {
  return {
    type: ADD_PRODUCT_TO_WAREHOUSE,
    value
  }
}

export const addWarehouse = (value) => {
  return {
    type: ADD_WAREHOUSE,
    value
  }
}