import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
  Box,
  Button,
  List,
  ListItem,
  makeStyles,
  Typography
} from "@material-ui/core";
import MoveProductModal from "./MoveProductModal";
import ActionMenu from "../assets/ActionMenu/ActionMenu";

const useStyles = makeStyles({
  boxContainer: {
    display: 'flex',
  },
});

const ProductList = () => {
  const  { idProduct } = useParams();

  const classes = useStyles()
  const products = useSelector(state => state.products);
  const warehouses = useSelector(state => state.warehouse);

  const [open, setOpen] = useState(false);
  const [warehouseData, setWarehouseData] = useState({});

  const productInfo = products.find(product => {
    return product.idProduct === Number(idProduct)
  });

  const handleModalOpen = (data) => {
    if (data.name) {
      setWarehouseData(data)
      setOpen(true)
    } else {
      const dataForUnallocated = {
        ...data,
        name: 'unallocated'
      }

      setWarehouseData(dataForUnallocated)
      setOpen(true)
    }
  };

  const handleModalClose = () => {
    setOpen(false);
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
                      Name of Warehouse: {nameOfWarehouse ? nameOfWarehouse : 'unallocated'}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Count of Products in warehouse: {element.count}
                    </Typography>
                  </ListItem>
                  <Button onClick={() => handleModalOpen(
                    {
                      element: element,
                      name: nameOfWarehouse,
                      idProduct: productInfo.idProduct,
                      nameProduct: productInfo.name
                    }
                  )}>
                    Move product to another warehouse
                  </Button>
                </Box>
              )
            })
          }
        </Box>
      </List>
      <ActionMenu idProduct={idProduct} />
      {open && <MoveProductModal
        open={open}
        onClose={handleModalClose}
        warehouseData={warehouseData}
      /> }
    </Box>
  )
}

export default ProductList