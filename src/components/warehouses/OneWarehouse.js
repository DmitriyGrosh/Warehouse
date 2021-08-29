import React from "react";
import {
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

const OneWarehouse = () => {
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
  )
}

export default OneWarehouse;