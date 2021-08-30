import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom";

const UnallocatedWarehouse = () => {

  const unallocated = useSelector(state => state.unallocated)
  console.log('==========>unallocated', unallocated)

  const history = useHistory()
  const handleRedirect = (id) => {
    history.push(`products/product${id}`)
  }
  return (
    <Container>
      <TableContainer>
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