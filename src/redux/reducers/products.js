import {CREATE_PRODUCT} from "../types/products";

const initialStateProducts =[
  {
  idProduct: 1,
  wareHouseIds: [],
  name: 'name',
  totalCount: 10,
  size: 's',
  pricePerCount: 230,
  width: 20,
  height: 30,
  length: 40,
  productOwner: 'XUY',
  preciousness: 's',
}
]

export const productsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.value]
    default:
      return state
  }
}