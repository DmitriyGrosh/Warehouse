import React, {useState} from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import TextError from "../main/TextError";
import ProductSchema from "./ProductSchema";
import DistributeProductSchema from "./DistributeProductSchema";

import {createProduct} from "../../redux/actions/products";
import {addProduct} from "../../redux/actions/warehouses";

const useStyles = makeStyles({
  box: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '1fr',
    paddingTop: '20px'
  },
  textField: {
    width: '100%'
  },
  boxButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px'
  }
});

const CreateProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {getValues, register, trigger, formState: { errors }} = useForm()
  const warehouses = useSelector(state => state.warehouse);
  const products = useSelector(state => state.products);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedWarehouses, setSelectedWarehouses] = useState([]);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const steps = ['Create product', "Distribute product"];

  const handleAddWarehouse = () => {
    const values = getValues()

    if (submitError) {
      setErrorMessage('you must distribute all products')
    } else {
      const warehouseIdsData = [];
      const {
        name,
        totalCount,
        size,
        pricePerCount,
        width,
        height,
        length,
        productOwner,
        preciousness
      } = values

      const data = {
        idProduct: products.length + 1,
        wareHouseIds: warehouseIdsData,
        name,
        totalCount,
        size,
        pricePerCount,
        width,
        height,
        length,
        productOwner,
        preciousness
      };

      setErrorMessage('')

      warehouses.forEach(warehouse => {
        selectedWarehouses.forEach(name => {
          const warehouseProductData = {
            idWarehouse: warehouse.idWareHouse,
            count: values[`warehouseCount${name}`]
          }

          name === warehouse.name && warehouseIdsData.push(warehouseProductData)
        })
      })

      dispatch(createProduct(data))

      warehouseIdsData.forEach(el => {
        dispatch(addProduct({
          idData: el.idWarehouse,
          data: {
            idProduct: products.length + 1,
            countOfProduct: el.count,
            nameProduct: name
          }
        }))
      })
    }
  };

  const handleNext = () => {
    const firstStep = [
      "name",
      "totalCount",
      "pricePerCount",
      "width",
      "height",
      "length",
    ];

    if (activeStep === 0) {
      trigger(firstStep).then(isValid => {
        isValid && setActiveStep((prevActiveStep) => prevActiveStep + 1);
      })
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Typography variant='h4'>
        Add Products in your warehouses
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <ProductSchema register={register} errors={errors} />}
      {activeStep === 1 && <DistributeProductSchema
        register={register}
        errors={errors}
        warehouses={warehouses}
        setSelectedWarehouses={setSelectedWarehouses}
        selectedWarehouses={selectedWarehouses}
        getValues={getValues}
        setSubmitError={setSubmitError}
      />
      }
      {errorMessage && <TextError>{errorMessage}</TextError>}
      <Box className={classes.boxButtons}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {activeStep === 0 ?
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Next
          </Button>
          :
          <Button onClick={handleAddWarehouse} variant="outlined">
            Add to warehouses
          </Button>
        }
      </Box>
    </Container>
  )
}

export default CreateProduct