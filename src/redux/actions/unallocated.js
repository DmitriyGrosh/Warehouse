import {ADD_UNALLOCATED} from "../types/unallocated";

export const addUnallocated = (products) => {
  return {
    type: ADD_UNALLOCATED,
    products: products
  }
}