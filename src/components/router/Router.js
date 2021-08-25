import React from "react";
import {Route, Switch} from "react-router-dom";

import Warehouses from "../Warehouses";
import OneWarehouse from "./OneWarehouse";


const Router = () => {

  return (
    <Switch>
      <Route exact path="/">
        jjjj
      </Route>
      <Route exact path="/warehouses">
        <Warehouses />
      </Route>
      <Route exact path="/store">
        <div>
          cccc bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb bbbbbb
        </div>
      </Route>
      <Route path='/warehouses/warehouse:id'>
        <OneWarehouse />
      </Route>
    </Switch>
  )
}

export default Router