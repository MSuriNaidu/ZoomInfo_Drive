import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from '@emotion/styled';

const useStyles = styled((theme) => ({
  drawer: {
    width: '250px',
  },
}));

const LeftMenu = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer} anchor="left">
      <List>
        <ListItem button key="New">
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="New" />
        </ListItem>
        {/* Add more menu items here */}
      </List>
    </Drawer>
  );
};

export default LeftMenu;
