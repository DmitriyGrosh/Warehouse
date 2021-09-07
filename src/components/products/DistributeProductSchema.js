import React, {useEffect, useState} from "react";
import {
  Box,
  makeStyles,
  Typography
} from "@material-ui/core";

import ProductInWarehouseSchema from "./ProductInWarehouseSchema";

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

const DistributeProductSchema = (
  {
    register,
    errors,
    warehouses,
    getValues,
    setSelectedWarehouses,
    selectedWarehouses,
    setSubmitError
  }
) => {
  const classes = useStyles();
  const data = getValues();
  let totalCount = data.totalCount;
  const [flag, setFlag] = useState(0);
  const [distributed, setDistributed] = useState(totalCount);
  
  useEffect(() => {
    let counter = 0;
    let result = totalCount;
    
    selectedWarehouses.forEach(name => {
      counter += Number(data[`warehouseCount${name}`])
    })

    result -= counter
    setDistributed(result)

    if (result === 0) {
      setSubmitError(false)
    } else {
      setSubmitError(true)
    }
  }, [selectedWarehouses, flag])

  return (
    <Box className={classes.box}>
      <Typography>{`you have ${distributed} products`}</Typography>
      {
        warehouses.map(e => {
          return(
          <Box key={e.idWareHouse} >
            <ProductInWarehouseSchema
              selectedWarehouses={selectedWarehouses}
              register={register}
              errors={errors}
              setSelectedWarehouses={setSelectedWarehouses}
              name={e.name}
              setFlag={setFlag}
            />
          </Box>)
        })
      }
  </Box>
  )
};

export default  DistributeProductSchema;