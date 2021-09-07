import {
  CREATE_PRODUCT,
  MOVE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_WAREHOUSES_FROM_PRODUCTS
} from "../types/products";

const initialStateProducts =[
  {
  idProduct: 1,
  wareHouseIds: [{idWarehouse: 1, count: 10, nameOfWarehouse: 'name'}],
  name: 'name',
  totalCount: 10,
  size: 's',
  pricePerCount: 230,
  width: 20,
  height: 30,
  length: 40,
  productOwner: 'XUY',
  preciousness: 's',
},
  {
    idProduct: 1000000,
    wareHouseIds: [{idWarehouse: -1, count: 10, nameOfWarehouse: 'unallocated'}],
    totalCount: 10,
    name: 'Apple',
    size: 's',
    pricePerCount: 230,
    width: 20,
    height: 30,
    length: 40,
    productOwner: 'XUY',
    preciousness: 's',
  }
];

export const productsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.value]
    case DELETE_WAREHOUSES_FROM_PRODUCTS:
      const deletedWarehouses = state.map(product => {
        product.wareHouseIds.map(id => {
          if (id.idWarehouse === action.id) {
            id.idWarehouse = -1
            id.nameOfWarehouse = 'unallocated'
          }
        })

        return {...product}
      })

      return deletedWarehouses
    case MOVE_PRODUCT:
      return state.map(product => {
        if (product.idProduct === action.value.idProduct) {
          return action.value
        } else {
          return product
        }
      })
    case DELETE_PRODUCT:
      let indexOfProduct = null;
      state.forEach((product, index) => {
        if (product.idProduct === action.id) {
          indexOfProduct = index
        }
      })
      state.splice(indexOfProduct, 1)
      return state
    default:
      return state
  }
};