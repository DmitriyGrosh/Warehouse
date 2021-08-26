import {ADD_PRODUCT} from "../types/warehouse";
import {ADD_WAREHOUSE} from "../types/warehouse";

export const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    value
  }
}

export const addWarehouse = (value) => {
  console.log('==========>value', value)
  return {
    type: ADD_WAREHOUSE,
    value
  }
}