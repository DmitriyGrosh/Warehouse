import {
  ADD_UNALLOCATED,
  REMOVE_FROM_UNALLOCATED,
  DELETE_FROM_UNALLOCATED
} from "../types/unallocated";

const initialStateOtherProducts = {
  products: [
    {
      idProduct: 1000000,
      countOfProduct: 10,
      nameProduct: 'Apple'
    },
  ]
};


export const defaultWarehouseReducer = (state = initialStateOtherProducts, action) => {
  switch (action.type) {
    case ADD_UNALLOCATED:
      let counter = 0
      const newProducts = state.products.map(product => {
        if (product.idProduct === action.products[0].idProduct) {
          product.countOfProduct += action.products[0].countOfProduct
          counter += 1
          return product
        } else {
          return product
        }
      })
      if (counter !== 0) {
        return {...state, products: newProducts}
      } else {
        return {...state, products: [...state.products, ...action.products]}
      }
    case DELETE_FROM_UNALLOCATED:
      let indexOfDelete = null
      const deletedProducts = state.products.map((product, index) => {
        if (product.idProduct === action.id) {
          indexOfDelete = index
        }
      })

      deletedProducts.splice(indexOfDelete, 1)
      return {...state, products: deletedProducts}
    case REMOVE_FROM_UNALLOCATED:
      let indexOfDeleted = null
      const removedProducts = state.products.map((product, index) => {
        if (product.idProduct === action.value.idProduct) {
          const result = product.countOfProduct - action.value.countOfSend
          
          if (result === 0) {
            indexOfDeleted = index
          } else {
            product.countOfProduct = result
          }
        }

        return product
      })
      
      if (indexOfDeleted !== null) {
        removedProducts.splice(indexOfDeleted, 1)
      }

      return {...state, products: removedProducts}
    default:
      return state
  }
};

