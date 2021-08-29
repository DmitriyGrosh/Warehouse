import {CREATE_PRODUCT} from "../types/products";

export const createProduct = (value) => {
  return {
    type: CREATE_PRODUCT,
    value
  }
}