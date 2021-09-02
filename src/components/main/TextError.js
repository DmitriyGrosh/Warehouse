import React from "react"
import {Typography, withStyles} from "@material-ui/core";

const TextError = withStyles({
  root: {
    color: 'red'
  }
})(Typography)

export default TextError