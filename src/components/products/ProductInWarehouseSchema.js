import React from 'react'
import {
  Box,
  InputLabel,
  makeStyles,
  TextField
} from "@material-ui/core";

import TextError from "../main/TextError";

const useStyles = makeStyles({
  form: {
    width: '100px',
    marginBottom: '20px'
  },
  textField: {
    marginTop: '20px'
  }
});

const ProductInWarehouseSchema = (
  {
    register,
    errors,
    setSelectedWarehouses,
    name,
    selectedWarehouses,
    setFlag
  }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    const value = e.target.value;

    setFlag(prev => prev + 1)
    
    if (value && selectedWarehouses.indexOf(name) === -1) {
      setSelectedWarehouses(prev => [...prev, name])
    }

    if (Number(value) === 0 && selectedWarehouses.indexOf(name) !== -1) {
      const copySelectedWarehouses = selectedWarehouses;
      const position = selectedWarehouses.indexOf(name);
      copySelectedWarehouses.splice(position, 1)
      setSelectedWarehouses(copySelectedWarehouses)
    }
  };

  return (
    <Box display='flex' flexDirection='column'>
      <InputLabel>Warehouse {name}</InputLabel>
      <TextField
        className={classes.textField}
        label="Count"
        type="number"
        variant="outlined"
        onChange={handleChange}
        inputProps={{
          ...register(`warehouseCount${name}`)
        }}
        error={!!errors[`warehouseCount${name}`]}
      />
      {!!errors[`warehouseCount${name}`] && <TextError>You should write location of warehouse</TextError>}
    </Box>
  )
};

export default ProductInWarehouseSchema;