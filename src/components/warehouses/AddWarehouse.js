import React, {useState} from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Snackbar,
  TextField,
  Typography
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addWarehouse, moveProductInWarehouse} from "../../redux/actions/warehouses";
import MuiAlert from "@material-ui/lab/Alert";

import TextError from "../main/TextError";
import {removeFromUnallocated} from "../../redux/actions/unallocated";
import {moveProduct} from "../../redux/actions/products";

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
});

const AddWarehouse = () => {
  const [open, setOpen] = useState(false)
  const [isCreateWarehouse, setIsCreateWarehouse] = useState(false)

  const dispatch = useDispatch()

  const {
    getValues,
    register,
    trigger,
    formState: { errors }
  } = useForm(
    {
      defaultValues: {
        area: '',
        name: '',
        location: ''
      }
    })
  const warehouses = useSelector(state => state.warehouse)
  const unallocated = useSelector(state => state.unallocated)

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

      if (isValid) {
        dispatch(addWarehouse(newWarehouse))
        setOpen(true)
        setIsCreateWarehouse(true)
      }
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleMove = (value) => {
    const data = getValues()
    const request = {
      toNameWarehouse: data.name,
      toIdWarehouse: warehouses.length,
      nameProduct: value.nameProduct,
      idProduct: value.idProduct,
      fromIdWarehouse: -1,
      fromNameWarehouse: 'unallocated',
      countOfSend: Number(data[`${value.nameProduct}`]),
      isDeleted: true
    }

    dispatch(moveProductInWarehouse(request))
    dispatch(removeFromUnallocated(request))
    dispatch(moveProduct(request))
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
          <Button
            onClick={handleAddWarehouse}
            variant="contained"
            color="primary"
          >
            Add Warehouse
          </Button>
      </Box>
      {isCreateWarehouse && <Box>
        {
          unallocated.products.map((element) => {
            return (
              <Box>
                <Typography>
                  {element.nameProduct}
                </Typography>
                <Typography>
                  {element.countOfProduct}
                </Typography>
                <TextField
                  className={classes.textField}
                  label="count"
                  type="number"
                  variant="outlined"
                  inputProps={{
                    ...register(element.nameProduct)
                  }}
                  error={!!errors.name}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleMove(element)}
                >
                  move from unallocated to new warehouse
                </Button>
              </Box>
            )
          })
        }
      </Box>}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert onClose={handleClose} severity="success">
          You add warehouse!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
};

export default AddWarehouse;