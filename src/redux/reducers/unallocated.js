import {ADD_UNALLOCATED, REMOVE_FROM_UNALLOCATED} from "../types/unallocated";
import zIndex from "@material-ui/core/styles/zIndex";

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
      return {...state, products: [...state.products, ...action.products]}
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
      
      console.log('==========>removedProducts', removedProducts)

      return {...state, products: removedProducts}
    default:
      return state
  }
}

