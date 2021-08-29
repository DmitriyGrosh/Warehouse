import React from "react";
import {Route, Switch} from "react-router-dom";

import Warehouses from "../Warehouses";
import AddWarehouse from "../warehouses/AddWarehouse";
import CreateProduct from "../products/CreateProduct";
import ProductRouter from "./ProductRouter";


const Router = () => {

  return (
    <Switch>
      <Route exact path="/warehouses">
        <Warehouses />
      </Route>
      <Route exact path="/store">
        <div>
          cccc bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbb
        </div>
      </Route>
      <Route path='/warehouses/warehouse:idWarehouse'>
        <ProductRouter />
      </Route>
      <Route exact path="/create-products">
        <CreateProduct />
      </Route>
      <Route exact path='/add-warehouse'>
        <AddWarehouse />
      </Route>
    </Switch>
  )
};

export default Router