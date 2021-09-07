import React from "react";
import {
  Button,
  ListItem,
  Typography
} from "@material-ui/core";

const ActionBoxProduct = ({nameOfWarehouse, element, productInfo, handleModalOpen}) => (
  <>
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
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleModalOpen(
        {
          element: element,
          name: nameOfWarehouse,
          idProduct: productInfo.idProduct,
          nameProduct: productInfo.name
        }
      )}
    >
      Move product to another warehouse
    </Button>
  </>
);

export default ActionBoxProduct;