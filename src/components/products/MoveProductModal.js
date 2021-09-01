import React, {useEffect, useState} from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import ProductInWarehouseSchema from "./ProductInWarehouseSchema";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import TextError from "../main/TextError";
import {moveProduct} from "../../redux/actions/products";
import {moveProductInWarehouse} from "../../redux/actions/warehouses";
import {removeFromUnallocated} from "../../redux/actions/unallocated";

const MoveProductModal = ({onClose, open, warehouseData}) => {
  const warehouses = useSelector(state => state.warehouse);
  const filteredWarehouses = warehouses.filter(warehouse => warehouse.idWareHouse !== warehouseData.element.idWarehouse);

  const {getValues, register, formState: { errors }} = useForm();
  const [selectedWarehouses, setSelectedWarehouses] = useState([]);
  const [flag, setFlag] = useState(0);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const values = getValues();
    let counter = 0;
    filteredWarehouses.forEach(warehouse => {
      if (values[`warehouseCount${warehouse.name}`]) {
        counter += Number(values[`warehouseCount${warehouse.name}`])
      }
    })
  }, [flag])

  const handleMove = () => {
    const values = getValues();
    let counter = 0;
    filteredWarehouses.forEach(warehouse => {
      if (values[`warehouseCount${warehouse.name}`]) {
        counter += Number(values[`warehouseCount${warehouse.name}`])
      }
    })

    if (counter > warehouseData.element.count) {
      setError(`you have only ${warehouseData.element.count} products in warehouse`)
    } else {
      setError('')
    }

    if (!error) {
      filteredWarehouses.forEach(warehouse => {
        selectedWarehouses.forEach(name => {
          if (name === warehouse.name) {
            const request = {
              toNameWarehouse: name,
              toIdWarehouse: warehouse.idWareHouse,
              nameProduct: warehouseData.nameProduct,
              idProduct: warehouseData.idProduct,
              fromIdWarehouse: warehouseData.element.idWarehouse,
              fromNameWarehouse: warehouseData.name,
              countOfSend: Number(values[`warehouseCount${warehouse.name}`])
            }

            if (warehouseData.name === 'unallocated') {
              dispatch(moveProductInWarehouse(request))
              dispatch(removeFromUnallocated(request))
              dispatch(moveProduct(request))
            } else {
              dispatch(moveProduct(request))
              dispatch(moveProductInWarehouse(request)) 
            }
          }
        })
      })
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        modal open
      </DialogTitle>
      <DialogContent>
        Count {warehouseData.element.count}
        {
          filteredWarehouses.map(warehouse => {
            return (
              <Box key={warehouse.idWareHouse}>
                <ProductInWarehouseSchema
                  name={warehouse.name}
                  errors={errors}
                  register={register}
                  selectedWarehouses={selectedWarehouses}
                  setSelectedWarehouses={setSelectedWarehouses}
                  setFlag={setFlag}
                />
              </Box>)
          })
        }
        <Button onClick={handleMove}>
          Move
        </Button>
        {error && <TextError>{error}</TextError>}
      </DialogContent>
    </Dialog>
  )
}

export default MoveProductModal