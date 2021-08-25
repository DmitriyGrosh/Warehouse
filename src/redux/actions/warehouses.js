import {ADD_PRODUCT} from "../types/warehouse";

export const addProduct = (value) => {
  console.log('==========>value', value)
  return {
    type: ADD_PRODUCT,
    value
  }
}