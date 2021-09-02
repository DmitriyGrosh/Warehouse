import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  MOVE_PRODUCT,
  DELETE_WAREHOUSES_FROM_PRODUCTS
} from "../types/products";

export const createProduct = (value) => {
  return {
    type: CREATE_PRODUCT,
    value
  }
};

export const moveProduct = (value) => {
  return {
    type: MOVE_PRODUCT,
    value
  }
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id: id
  }
};

export const deleteWarehousesFromProducts = (id) => {
  return {
    type: DELETE_WAREHOUSES_FROM_PRODUCTS,
    id: id
  }
};