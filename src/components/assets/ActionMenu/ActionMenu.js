import React, {useState} from "react";
import {Box, Button, makeStyles, Menu, MenuItem} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {deleteProduct, deleteWarehousesFromProducts} from "../../../redux/actions/products";
import {deleteProductFromWarehouse, deleteWarehouse} from "../../../redux/actions/warehouses";
import {addUnallocated, deleteFromUnallocated} from "../../../redux/actions/unallocated";

const useStyles = makeStyles({
  boxDelete: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
});

const ActionMenu = ({idProduct, idWarehouse}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch()
  const history = useHistory()
  const warehouses = useSelector(state => state.warehouse)
  const unallocated = useSelector(state => state.unallocated)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteAction = () => {
    if (idProduct) {
      dispatch(deleteProduct(Number(idProduct)))
      dispatch(deleteProductFromWarehouse(Number(idProduct)))

      unallocated.products.forEach(product => {
        if (product.idProduct === idProduct) {
          dispatch(deleteFromUnallocated(Number(idProduct)))
        }
      })
      history.push('/products')
    } else {
      const warehouseInfo = warehouses.find(warehouse => {
        return warehouse.idWareHouse === Number(idWarehouse)
      })
      dispatch(addUnallocated(warehouseInfo.products))
      dispatch(deleteWarehouse(Number(idWarehouse)))
      dispatch(deleteWarehousesFromProducts(Number(idWarehouse)))
      history.push('/warehouses')
    }
  };

  return (
    <Box className={classes.boxDelete}>
      <Button onClick={handleOpenMenu}>
        action
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDeleteAction}>Delete</MenuItem>
        <MenuItem onClick={handleMenuClose}>Close</MenuItem>
      </Menu>
    </Box>
  )
}

export default ActionMenu