export const moveAddProductHook = (state, action) => {
  let resultOfRequest = {}
  const newProductsArray = state.map(product => {
    let counter = true
    if (product.idProduct === action.idProduct) {
      product.wareHouseIds.map((data, index) => {
        if (data.idWarehouse === action.toIdWarehouse) {
          data.count += action.countOfSend
          counter = false
        }

        if (data.idWarehouse === action.fromIdWarehouse) {
          const result = data.count - action.countOfSend
          if (result === 0) {
            product.wareHouseIds.splice(index, 1)
          } else {
            data.count -= action.countOfSend
          }
        }
      })

      if (counter && action.isDeleted) {
        const newWarehouseId = {
          idWarehouse: action.toIdWarehouse,
          count: action.countOfSend
        }
        return {...product, wareHouseIds: [...product.wareHouseIds, newWarehouseId]}
      } else {
        return product
      }
    } else {
      return product
    }
  })

  newProductsArray.forEach(product => {
    if (product.idProduct === action.idProduct) {
      resultOfRequest = product
    }
  })
  return resultOfRequest
}