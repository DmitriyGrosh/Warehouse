import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
  Box,
  List,
  makeStyles,
} from "@material-ui/core";

import MoveProductModal from "./MoveProductModal";
import ActionMenu from "../assets/ActionMenu/ActionMenu";
import ListInfo from "../assets/ListInfo/ListInfo";
import ActionBoxProduct from "../assets/ActionBoxProduct/ActionBoxProduct";

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
  let nameOfWarehouse = '';

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
        <ListInfo productInfo={productInfo} />
        <Box>
          {
            productInfo.wareHouseIds.map((element, index) => {
              warehouses.forEach(warehouse => {
                if (warehouse.idWareHouse === element.idWarehouse) {
                  nameOfWarehouse = warehouse.name
                }
              })
              return (
                <Box key={index}>
                  <ActionBoxProduct
                    productInfo={productInfo}
                    nameOfWarehouse={nameOfWarehouse}
                    element={element}
                    handleModalOpen={handleModalOpen}
                  />
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
};

export default ProductList;