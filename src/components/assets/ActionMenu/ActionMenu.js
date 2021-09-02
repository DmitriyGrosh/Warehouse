import React, {useState} from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  Menu,
  MenuItem,
  TextField,
  Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

import {
  deleteProduct,
  deleteWarehousesFromProducts,
  moveProduct
} from "../../../redux/actions/products";
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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const warehouses = useSelector(state => state.warehouse);
  const unallocated = useSelector(state => state.unallocated);
  const products = useSelector(state => state.products);
  const {getValues, register, trigger, reset, formState: { errors }} = useForm()

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

  const handleMenuEdit = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
    setAnchorEl(null)
  }

  const handleChange = () => {
    if (!!errors.count) {
      reset({
        count: ''
      })
    }
  }

  const handleMove = () => {
    const data = getValues()
    trigger(['count']).then(isValid => {
      if (isValid && data.count > 0) {
        products.forEach(product => {
          if (Number(product.idProduct) === Number(idProduct)) {
            const requestToUnallocated = {
              idProduct: Number(idProduct),
              countOfProduct: Number(data.count),
              nameProduct: product.name
            }

            const request = {
              toNameWarehouse: 'unallocated',
              toIdWarehouse: -1,
              nameProduct: 'unallocated',
              idProduct: Number(idProduct),
              countOfSend: Number(data.count),
              isDeleted: true
            }

            dispatch(addUnallocated([requestToUnallocated]))
            dispatch(moveProduct(request))
          }
        })
      }
    })
  }

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
        {idProduct && <MenuItem onClick={handleMenuEdit}>Edit Product</MenuItem>}
        {idWarehouse && <MenuItem onClick={handleMenuEdit}>Edit Warehouse</MenuItem>}
      </Menu>
      <Dialog open={openModal} onClose={handleModalClose}>
        {idProduct && <DialogContent>
          <Typography>
            You can add more products
          </Typography>
          <TextField
            onFocus={handleChange}
            label="Count of products"
            type="number"
            variant="outlined"
            inputProps={{
              ...register("count", {required: true})
            }}
            error={!!errors.count}
          />
          <Button
            disabled={!!errors.count}
            onClick={handleMove}>
            move
          </Button>
        </DialogContent>}
      </Dialog>
    </Box>
  )
};

export default ActionMenu;