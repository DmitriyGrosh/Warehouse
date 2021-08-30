import React from "react";
import {Route, Switch} from "react-router-dom";

import Warehouses from "../Warehouses";
import AddWarehouse from "../warehouses/AddWarehouse";
import CreateProduct from "../products/CreateProduct";
import OneWarehouse from "../warehouses/OneWarehouse";
import ProductList from "../products/ProductList";
import AllProducts from "../products/AllProducts";
import UnallocatedWarehouse from "../UnallocatedWarehouse";


const Router = () => {

  return (
    <Switch>
      <Route exact path="/warehouses">
        <Warehouses />
      </Route>
      <Route path='/warehouses/warehouse:idWarehouse'>
        <OneWarehouse />
      </Route>
      <Route exact path={'/products/product:idProduct'}>
        <ProductList />
      </Route>
      <Route exact path={'/products'}>
        <AllProducts />
      </Route>
      <Route exact path="/create-products">
        <CreateProduct />
      </Route>
      <Route exact path='/add-warehouse'>
        <AddWarehouse />
      </Route>
      <Route exact path='/unallocated'>
        <UnallocatedWarehouse />
      </Route>
    </Switch>
  )
};

export default Router