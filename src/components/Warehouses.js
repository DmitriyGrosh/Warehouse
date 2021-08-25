import React from 'react'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  tableRow: {
    cursor: 'pointer'
  }
})

const Warehouses = () => {
  const classes = useStyles()
  const warehouses = useSelector(state => state.warehouse)
  const history = useHistory()

  const handleRedirect = () => {
    history.push('/warehouse')
  }

  return (
    <TableContainer
      className={classes.tableContainer}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Name of warehouse
            </TableCell>
            <TableCell>
              Location
            </TableCell>
            <TableCell>
              Area
            </TableCell>
            <TableCell>
              Number of Products in warehouse
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            warehouses?.map(e => {
              return (
                <TableRow
                  onClick={handleRedirect}
                  className={classes.tableRow}
                >
                  <TableCell>
                    {e.name}
                  </TableCell>
                  <TableCell>
                    {e.location}
                  </TableCell>
                  <TableCell>
                    {e.area}
                  </TableCell>
                  <TableCell>
                    {e.products.length}
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

export default Warehouses;