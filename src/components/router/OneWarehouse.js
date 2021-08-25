import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { useParams } from 'react-router-dom';

const OneWarehouse = () => {

  const  { id } = useParams();
  return (
    <TableContainer
    component={Paper}
    >
      <Table>
        <TableHead>

        </TableHead>
        <TableBody>
          {
            [{e: 'aaa'}].map(e => {
              return (
                <TableRow>
                  <TableCell>
                    {e.e}
                  </TableCell>
                  <TableCell>

                  </TableCell>
                  <TableCell>

                  </TableCell>
                  <TableCell>

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