import React from "react";
import {
  Box,
  makeStyles,
  TextField
} from "@material-ui/core";

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
});

const ProductSchema = ({register, errors}) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Name"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("name", {required: true})
          }}
          error={!!errors.name}
        />
        {!!errors.name && <TextError>You should write location of warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Total Count"
          type="number"
          variant="outlined"
          inputProps={{
            ...register("totalCount", {required: true})
          }}
          error={!!errors.totalCount}
        />
        {!!errors.totalCount && <TextError>You should write number of area in warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Price Per Count"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("pricePerCount", {required: true})
          }}
          error={!!errors.pricePerCount}
        />
        {!!errors.pricePerCount && <TextError>You should write name of warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Width"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("width", {required: true})
          }}
          error={!!errors.width}
        />
        {!!errors.width && <TextError>You should write name of warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Height"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("height", {required: true})
          }}
          error={!!errors.height}
        />
        {!!errors.height && <TextError>You should write name of warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          required
          className={classes.textField}
          label="Length"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("length", {required: true})
          }}
          error={!!errors.length}
        />
        {!!errors.length && <TextError>You should write name of warehouse</TextError>}
      </Box>
      <Box>
        <TextField
          className={classes.textField}
          label="Preciousness"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("preciousness")
          }}
        />
      </Box>
      <Box>
        <TextField
          className={classes.textField}
          label="Size of Product"
          type="text"
          variant="outlined"
          inputProps={{
            ...register("size", {required: true})
          }}
        />
      </Box>
    </Box>
  )
};

export default ProductSchema;