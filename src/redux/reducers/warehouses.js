import {ADD_PRODUCT} from "../types/warehouse";

const initialStateWarehouses =
  [{
    idWareHouse: 1,
    location: 'Rus',
    area: 30,
    products: [
      {
        idProduct: 1,
        countOfProductWH: 9,
        nameProduct: 'aa'
      }
    ],
    name: 'name',
  }]

export const wareHouseReducer = (state = initialStateWarehouses, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [{...state, products: [...state.products, action.value]}]
    default:
      return state
  }
}