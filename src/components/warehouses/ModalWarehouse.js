import React, {useState} from 'react'
import {Dialog, DialogContent, DialogTitle, makeStyles, TextField, Typography} from "@material-ui/core";


const useStyles = makeStyles({
  textField: {
    width: '100%'
  },
})

const ModalWarehouse = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>

      </DialogTitle>
      <DialogContent>
        <Typography>ashjdjhsajhdvsajsvdjgh</Typography>
        <TextField
          className={classes.textField}
          label="Location"
          type="text"
          variant="outlined"
          // inputProps={{
          //   ...register("location", {required: true})
          // }}
          // error={!!errors.location}
        />
      </DialogContent>
    </Dialog>
  )
}

export default ModalWarehouse