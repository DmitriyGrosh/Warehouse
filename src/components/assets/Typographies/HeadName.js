import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";
const useStyles = makeStyles({
  head: {
    paddingBottom: '20px'
  }
})

const HeadName = ({text}) => {
  const classes = useStyles()
  return (
    <Typography variant={'h4'} className={classes.head}>
      {text}
    </Typography>
  )
}

export default HeadName