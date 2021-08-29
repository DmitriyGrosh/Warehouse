import {CREATE_PRODUCT, MOVE_PRODUCT} from "../types/products";

const initialStateProducts =[
  {
  idProduct: 1,
  wareHouseIds: [{idWarehouse: 1, count: 10},],
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
];

export const productsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.value]
    case  MOVE_PRODUCT:
      const newProductsArray = state.map(product => {
        let counter = true
        product.wareHouseIds.map((data) => {
          if (data.idWarehouse === action.value.toIdWarehouse) {
            data.count += action.value.countOfSend
            counter = false
          }

          if (data.idWarehouse === action.value.fromIdWarehouse) {
            const result = data.count - action.value.countOfSend
            if (result === 0) {
              data.idWarehouse = action.value.toIdWarehouse
              counter = false
            } else {
              data.count -= action.value.countOfSend
            }
          }
        })

        if (counter) {
          const newWarehouseId = {
            idWarehouse: action.value.toIdWarehouse,
            count: action.value.countOfSend
          }
          return {...product, wareHouseIds: [...product.wareHouseIds, newWarehouseId]}
        } else {
          return product
        }

      })

      return newProductsArray
    default:
      return state
  }
}