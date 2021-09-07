import React from "react";
import {ListItem} from "@material-ui/core";

const ListInfo = ({productInfo}) => (
  <>
    <ListItem>
      Name: {productInfo.name}
    </ListItem>
    <ListItem>
      Total Count: {productInfo.totalCount}
    </ListItem>
    <ListItem>
      Price per count: {productInfo.pricePerCount}
    </ListItem>
    <ListItem>
      Width: {productInfo.width}
    </ListItem>
    <ListItem>
      Height: {productInfo.height}
    </ListItem>
    <ListItem>
      Length: {productInfo.length}
    </ListItem>
    <ListItem>
      Product Owner: {productInfo.productOwner}
    </ListItem>
  </>
);

export default ListInfo;