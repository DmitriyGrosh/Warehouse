import React from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import OneWarehouse from "../warehouses/OneWarehouse";
import ProductList from "../products/ProductList";

const ProductRouter = () => {
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <OneWarehouse />
      </Route>
      <Route exact path={`${path}/product:idProduct`}>
        <ProductList />
      </Route>
    </Switch>
  )
}

export default ProductRouter