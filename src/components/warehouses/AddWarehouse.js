import React from 'react'
import {Box, Button, Container, FormControl, makeStyles, TextField, Typography} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addWarehouse} from "../../redux/actions/warehouses"

import TextError from "../main/TextError";

const useStyles = makeStyles({
  box: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '1fr',
    paddingTop: '20px'
  },
  textField: {
    width: '100%'
  }
})

const AddWarehouse = () => {

  const dispatch = useDispatch()

  const {getValues, register, trigger, formState: { errors }} = useForm()
  const warehouses = useSelector(state => state.warehouse)

  const handleAddWarehouse = () => {
    const preCheckedValues = ["location", "area", "name"]

    trigger(preCheckedValues).then(isValid => {
      const formData = getValues()
      const {location, area, name} = formData
      const newWarehouse = {
        idWareHouse: warehouses.length + 1,
        location,
        area,
        products: [],
        name
      }

      isValid && dispatch(addWarehouse(newWarehouse))
    })
  }

  const classes = useStyles()
  return (
    <Container>
      <Typography variant='h4'>
        Add Warehouse for your products
      </Typography>
      <Box className={classes.box}>
        <Box>
          <TextField
            className={classes.textField}
            label="Location"
            type="text"
            variant="outlined"
            inputProps={{
              ...register("location", {required: true})
            }}
            error={!!errors.location}
          />
          {!!errors.location && <TextError>You should write location of warehouse</TextError>}
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Area (m^2)"
            type="number"
            variant="outlined"
            inputProps={{
              ...register("area", {required: true})
            }}
            error={!!errors.area}
          />
          {!!errors.area && <TextError>You should write number of area in warehouse</TextError>}
        </Box>
        <Box>
          <TextField
            className={classes.textField}
            label="Name"
            type="text"
            variant="outlined"
            inputProps={{
              ...register("name", {required: true})
            }}
            error={!!errors.name}
          />
          {!!errors.name && <TextError>You should write name of warehouse</TextError>}
        </Box>
          <Button onClick={handleAddWarehouse} variant="outlined">
            Add Warehouse
          </Button>
      </Box>
    </Container>
  )
}

export default AddWarehouse