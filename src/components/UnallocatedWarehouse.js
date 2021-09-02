import React from "react";
import {
  Container, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom";
import HeadName from "./assets/Typographies/HeadName";

const UnallocatedWarehouse = () => {

  const unallocated = useSelector(state => state.unallocated)
  console.log('==========>unallocated', unallocated)

  const history = useHistory()
  const handleRedirect = (id) => {
    history.push(`products/product${id}`)
  }
  return (
    <Container>
      <HeadName text={'Unallocated warehouse'} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name of product
              </TableCell>
              <TableCell>
                All count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              unallocated.products.map(product => {
                  return (
                    <TableRow key={product.idProduct} onClick={() => handleRedirect(product.idProduct)}>
                      <TableCell>
                        {product.nameProduct}
                      </TableCell>
                      <TableCell>
                        {product.countOfProduct}
                      </TableCell>
                    </TableRow>
                  )
                }
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default UnallocatedWarehouse