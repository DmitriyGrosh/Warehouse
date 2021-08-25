import React from 'react'
import {Box, Container, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '1fr',
    paddingTop: '20px'
  }
})

const AddWarehouse = () => {

  const classes = useStyles()
  return (
    <Container>
      <Typography variant='h4'>
        Add Warehouse for your products
      </Typography>
      <Box className={classes.box}>
        <TextField
          label="Location"
          type="text"
          variant="outlined"
        />
        <TextField
          label="Area (m^2)"
          type="text"
          variant="outlined"
        />
        <TextField
          label="Name"
          type="text"
          variant="outlined"
        />
      </Box>
    </Container>
  )
}

export default AddWarehouse