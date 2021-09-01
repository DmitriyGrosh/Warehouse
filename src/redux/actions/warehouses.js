import {
  ADD_PRODUCT_TO_WAREHOUSE,
  ADD_WAREHOUSE,
  DELETE_PRODUCT_FROM_WAREHOUSE,
  DELETE_WAREHOUSE,
  MOVE_PRODUCT_IN_WAREHOUSE
} from "../types/warehouse";

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

export const deleteProductFromWarehouse = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_WAREHOUSE,
    id: id
  }
}

export const deleteWarehouse = (id) => {
  return {
    type: DELETE_WAREHOUSE,
    id: id,
  }
}

export const moveProductInWarehouse = (value) => {
  return {
    type: MOVE_PRODUCT_IN_WAREHOUSE,
    value
  }
}