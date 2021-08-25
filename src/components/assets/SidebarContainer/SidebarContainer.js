import React from 'react';
import {Drawer, List, ListItem, makeStyles} from '@material-ui/core';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: 100,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 100,
    border: "none"
  }
})

const SidebarContainer = ({children}) => {
  const classes = useStyles();
  return (

    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <List>
        <NavLink to="/warehouses">
          <ListItem>
            Warehouses
          </ListItem>
        </NavLink>
        <NavLink to="/store">
          <ListItem>
            Unallocated warehouse
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem>
            Create Products
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  )
}


export default SidebarContainer;