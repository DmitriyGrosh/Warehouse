import React from 'react'
import {Box, Button, DialogContent, Typography} from "@material-ui/core";
import {addUnallocated} from "../../../redux/actions/unallocated";
import {deleteWarehousesFromProducts, moveProduct} from "../../../redux/actions/products";
import {useDispatch} from "react-redux";
import {moveProductInWarehouse} from "../../../redux/actions/warehouses";

const RemoveProductFromWarehouse = ({warehouses, id}) => {

  const products = warehouses.find(warehouse => {
    return warehouse.idWareHouse === id
  })

  const dispatch = useDispatch()

  const handleRemove = () => {
    console.log('==========>1', 1)
    products.products.forEach(product => {
      if (Number(product.idProduct) === Number(id)) {
        console.log('==========>1', 1)
        const request = {
          fromNameWarehouse: products.name,
          fromIdWarehouse: products.idWareHouse,
          nameProduct: product.nameProduct,
          idProduct: Number(id),
          countOfSend: product.countOfProduct,
          isDeleted: false
        }
        dispatch(deleteWarehousesFromProducts(Number(id)))
        // dispatch(moveProduct(request))
        // dispatch(moveProductInWarehouse(request))
      }
    })
  }

  return (
    <DialogContent>
      <Typography>remove product from warehouse</Typography>
      {
        products.products.map(warehouse => {
          return (
          <Box>
            <Typography>
              {warehouse.nameProduct}
            </Typography>
            <Typography>
              {warehouse.countOfProduct}
            </Typography>
            <Button onClick={() => handleRemove(warehouse)}>
              remove from warehouse
            </Button>
          </Box>
          )
        })
      }
    </DialogContent>
  )
}

export default RemoveProductFromWarehouse