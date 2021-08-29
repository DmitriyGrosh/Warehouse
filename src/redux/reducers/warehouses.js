import {
  ADD_PRODUCT_TO_WAREHOUSE,
  DELETE_PRODUCT_FROM_WAREHOUSE,
  ADD_WAREHOUSE,
  DELETE_WAREHOUSE
} from "../types/warehouse";

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
      },
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
    case ADD_WAREHOUSE:
      return [...state, action.value]
    case DELETE_WAREHOUSE:
      let indexOfWarehouse = null
      state.forEach((warehouse, index) => {
        if (warehouse.idWareHouse === action.id) {
          indexOfWarehouse = index
        }
      })

      return state.splice(indexOfWarehouse, 1)
    case ADD_PRODUCT_TO_WAREHOUSE:
      let newProducts = []
      const newArrayWithProducts = state.map(warehouse => {
        if (warehouse.idWareHouse === action.value.idData) {
          newProducts = [...warehouse.products, action.value.data]
        } else {
          newProducts = [...warehouse.products]
        }
        return {...warehouse, products: newProducts}
      })

      return newArrayWithProducts
    case DELETE_PRODUCT_FROM_WAREHOUSE:
      const deletedProducts = state.map(warehouse => {
        let indexOfProduct = null
        warehouse.products.map((product, index) => {
          if (product.idProduct === action.id) {
            indexOfProduct = index
          }
        })
        
        if (indexOfProduct !== null) {
          warehouse.products.splice(indexOfProduct, 1)
        }

        return {...warehouse, products: [...warehouse.products]}
      })

      return deletedProducts
    default:
      return state
  }
}