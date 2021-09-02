import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: 60,
    },
  },
  drawerPaper: {
    width: 250,
    border: "none",
    [theme.breakpoints.down('sm')]: {
      width: 60,
    },
  },
  link: {
    background:"red"
  }
}));

const SidebarContainer = () => {
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Warehouses" />
          </ListItem>
        </NavLink>
        <NavLink to="/unallocated">
          <ListItem button>
            <ListItemIcon>
              <UnarchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Unallocated warehouse" />
          </ListItem>
        </NavLink>
        <NavLink to="/products">
          <ListItem button>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/create-products">
          <ListItem button>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/add-warehouse">
          <ListItem button>
            <ListItemIcon>
              <CreateNewFolderIcon />
            </ListItemIcon>
            <ListItemText primary="Add Warehouse" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  )
}


export default SidebarContainer;