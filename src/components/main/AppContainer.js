import React from 'react'
import './main.scss'
import Router from "../router/Router";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/actions/warehouses";

const AppContainer = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log('==========>111', )
    dispatch(addProduct({
      idProduct: 1,
      countOfProductWH: 9,
      nameProduct: 'aa'
    }))
  }
  return (
    <div className='container'>
      <Router />
    </div>
  )
}

export default AppContainer;