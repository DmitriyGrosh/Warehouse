import {ADD_UNALLOCATED, REMOVE_FROM_UNALLOCATED} from "../types/unallocated";

export const addUnallocated = (products) => {
  return {
    type: ADD_UNALLOCATED,
    products: products
  }
}

export const removeFromUnallocated = value => {
  return {
    type: REMOVE_FROM_UNALLOCATED,
    value
  }
}