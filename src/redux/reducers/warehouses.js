import {
  ADD_PRODUCT_TO_WAREHOUSE,
  DELETE_PRODUCT_FROM_WAREHOUSE,
  ADD_WAREHOUSE,
  DELETE_WAREHOUSE,
  MOVE_PRODUCT_IN_WAREHOUSE
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
  ];

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

      state.splice(indexOfWarehouse, 1)
      return state
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
    case MOVE_PRODUCT_IN_WAREHOUSE:
      const redirectedProducts = state.map(warehouse => {
        let counter = 0

        if (warehouse.idWareHouse === action.value.fromIdWarehouse) {
          warehouse.products.map((product, index) => {
            if (product.idProduct === action.value.idProduct) {
              const result = product.countOfProduct - action.value.countOfSend
              if (result === 0) {
                product.splice(index, 1)
              } else {
                product.countOfProduct = result
              }
            }
          })
        }

        if (warehouse.idWareHouse === action.value.toIdWarehouse) {
          warehouse.products.map((product) => {
            if (product.idProduct === action.value.idProduct) {
              const result = product.countOfProduct + action.value.countOfSend
              product.countOfProduct = result
              counter += 1
            }
          })

          if (counter === 0) {
            const object = {
              idProduct: action.value.idProduct,
              countOfProduct: action.value.countOfSend,
              nameProduct: action.value.nameProduct
            }
            const array = [...warehouse.products, object]
            warehouse.products = array
          }
        }

        return {...warehouse, products: [...warehouse.products]}
      })

      return redirectedProducts
    default:
      return state
  }
};