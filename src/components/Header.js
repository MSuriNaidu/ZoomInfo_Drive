import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from '@emotion/styled';
import { RampRight } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

const useStyles = styled((theme) => ({
  appBar: {
    backgroundColor: '#4285f4', // Google Drive blue color
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
      };
  
    const handleNewFolder = () => {
      alert('create a new folder');  
      setAnchorEl(null);
    };

    const handlFolderUpload = () => {
        alert('create a new folder');  
        setAnchorEl(null);
      };

      const handleNewFileUpload = () => {
        alert('create a new folder');  
        setAnchorEl(null);
      };
  
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My Drive
        </Typography>
        <Button onClick={handleClick} variant="contained">
        <AddCircleOutlineIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNewFolder}>New Folder</MenuItem>
        <MenuItem onClick={handlFolderUpload}>Folder Upload</MenuItem>
        <MenuItem onClick={handleNewFileUpload}>File Upload</MenuItem>
      </Menu>
        {/* <List>
        <ListItem button key="New">
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="New" />
        </ListItem>
        {/* Add more menu items here 
      </List> */}
      <Typography sx={{paddingLeft:'1010px'}}>
        MSuriNaidu
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
