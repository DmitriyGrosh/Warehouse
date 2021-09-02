import React from "react";
import {useSelector} from "react-redux";
import {
  Container,
  List,
  ListItem, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography
} from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import HeadName from "../assets/Typographies/HeadName";

const AllProducts = () => {
  const products = useSelector(state => state.products)
  const history = useHistory()
  const {path} = useRouteMatch()
  const handleRedirect = (id) => {
    history.push(`${path}/product${id}`)
  }

  return (
    <Container>
      <HeadName text={'All Products'} />
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
              <TableCell>
                Names of warehouses
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products.map(product => {
                return (
                  <TableRow key={product.idProduct} onClick={() => handleRedirect(product.idProduct)}>
                    <TableCell>
                      {product.name}
                    </TableCell>
                    <TableCell>
                      {product.totalCount}
                    </TableCell>
                    <TableCell>
                        {
                          product.wareHouseIds.map((id, index) => {
                            return (
                              <List key={index}>
                                <ListItem>
                                  Count: {id.count}
                                </ListItem>
                                <ListItem>
                                  Name: {id.nameOfWarehouse}
                                </ListItem>
                              </List>
                            )
                          })
                        }
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

export default AllProducts