const initialStateOtherProducts = {
  products: [
    {
      idProduct: 1,
      countWithoutWH: 1,
      name: 'name'
    }
  ]
}


const defaultWareHouse = (state = initialStateOtherProducts, action) => {
  switch (action.type) {
    case '':
      return [...state.products, action.value]
    default:
      return state
  }
}

