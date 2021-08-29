import {ADD_UNALLOCATED} from "../types/unallocated";

const initialStateOtherProducts = {
  products: [
    {
      idProduct: 1000000,
      countOfProduct: 10,
      nameProduct: 'Apple'
    }
  ]
}


export const defaultWarehouseReducer = (state = initialStateOtherProducts, action) => {
  switch (action.type) {
    case ADD_UNALLOCATED:
      return [...state.products, ...action.products]
    default:
      return state
  }
}

