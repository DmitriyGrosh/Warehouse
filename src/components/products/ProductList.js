import React, {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  Box,
  Button,
  List,
  ListItem, makeStyles, Menu, MenuItem,
  Typography
} from "@material-ui/core";
import MoveProductModal from "./MoveProductModal";

import {deleteProduct} from "../../redux/actions/products";
import {deleteProductFromWarehouse} from "../../redux/actions/warehouses";


const useStyles = makeStyles({
  boxContainer: {
    display: 'flex',
  },
  boxDelete: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
});

const ProductList = () => {
  const  { idProduct } = useParams();
  const dispatch = useDispatch()
  const history = useHistory()

  const classes = useStyles()
  const products = useSelector(state => state.products);
  const warehouses = useSelector(state => state.warehouse);

  const [open, setOpen] = useState(false);
  const [warehouseData, setWarehouseData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const productInfo = products.find(product => {
    return product.idProduct === Number(idProduct)
  });

  const handleModalOpen = (data) => {
    setWarehouseData(data)
    setOpen(true)
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(Number(idProduct)))
    dispatch(deleteProductFromWarehouse(Number(idProduct)))
    history.push('/products')
    console.log('==========>1', 1)
  };

  return (
    <Box className={classes.boxContainer}>
      <List>
        <ListItem>
          Name: {productInfo.name}
        </ListItem>
        <ListItem>
          Total Count: {productInfo.totalCount}
        </ListItem>
        <ListItem>
          Price per count: {productInfo.pricePerCount}
        </ListItem>
        <ListItem>
          Width: {productInfo.width}
        </ListItem>
        <ListItem>
          Height: {productInfo.height}
        </ListItem>
        <ListItem>
          Length: {productInfo.length}
        </ListItem>
        <ListItem>
          Product Owner: {productInfo.productOwner}
        </ListItem>
        <Box>
          {
            productInfo.wareHouseIds.map((element, index) => {
              let nameOfWarehouse = ''
              warehouses.forEach(warehouse => {
                if (warehouse.idWareHouse === element.idWarehouse) {
                  nameOfWarehouse = warehouse.name
                }
              })
              return (
                <Box key={index}>
                  <ListItem>
                    <Typography>
                      Name of Warehouse: {nameOfWarehouse}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Count of Products in warehouse: {element.count}
                    </Typography>
                  </ListItem>
                  <Button onClick={() => handleModalOpen({element: element, name: nameOfWarehouse, idProduct: productInfo.idProduct, nameProduct: productInfo.name})}>
                    Move product to another warehouse
                  </Button>
                </Box>
              )
            })
          }
        </Box>
      </List>
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
          <MenuItem onClick={handleDeleteProduct}>Delete</MenuItem>
          <MenuItem onClick={handleMenuClose}>Close</MenuItem>
        </Menu>
      </Box>
      {open && <MoveProductModal open={open} onClose={handleModalClose} warehouseData={warehouseData} /> }
    </Box>
  )
}

export default ProductList