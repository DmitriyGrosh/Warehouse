import React from "react";
import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import {useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ActionMenu from "../assets/ActionMenu/ActionMenu";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const OneWarehouse = () => {
  const classes = useStyles()
  const  { idWarehouse } = useParams();
  const history = useHistory();
  const warehouses = useSelector(state => state.warehouse);
  let products = [];

  warehouses.forEach(warehouse => {
    if (warehouse.idWareHouse === Number(idWarehouse)) {
      products = warehouse.products
    }
  })

  const handleRedirect = (id) => {
    history.push(`/products/product${id}`)
  };

  return (
    <Container className={classes.container}>
      <ActionMenu idWarehouse={idWarehouse} />
      <TableContainer
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name of Product
              </TableCell>
              <TableCell>
                Count of product in warehouse
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products.map(product => {
                return (
                  <TableRow onClick={() => handleRedirect(product.idProduct)}>
                    <TableCell>
                      {product.nameProduct}
                    </TableCell>
                    <TableCell>
                      {product.countOfProduct}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default OneWarehouse;