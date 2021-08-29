import {CREATE_PRODUCT, MOVE_PRODUCT} from "../types/products";

export const createProduct = (value) => {
  return {
    type: CREATE_PRODUCT,
    value
  }
}

export const moveProduct = (value) => {
  return {
    type: MOVE_PRODUCT,
    value
  }
}