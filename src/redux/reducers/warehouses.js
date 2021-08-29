import {ADD_PRODUCT_TO_WAREHOUSE} from "../types/warehouse";
import {ADD_WAREHOUSE} from "../types/warehouse";

const initialStateWarehouses =
  [{
    idWareHouse: 1,
    location: 'Rus',
    area: 30,
    products: [
      {
        idProduct: 1,
        countOfProduct: 9,
        nameProduct: 'aa'
      }
    ],
    name: 'name',
  },
    {
      idWareHouse: 2,
      location: 'Rus',
      area: 30,
      products: [
        {
          idProduct: 1,
          countOfProduct: 9,
          nameProduct: 'aa'
        }
      ],
      name: 'nameaaa',
    }
  ]

export const wareHouseReducer = (state = initialStateWarehouses, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_WAREHOUSE:
      const newArrayWithProducts = state.map(warehouse => {
        let newProducts = []
        if (warehouse.idWareHouse === action.value.idData) {
          newProducts = [...warehouse.products, action.value.data]
        } else {
          newProducts = [...warehouse.products]
        }
        return {...warehouse, products: newProducts}
      })

      return newArrayWithProducts
    case ADD_WAREHOUSE:
      return [...state, action.value]
    default:
      return state
  }
}