import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from '@emotion/styled';
import { Menu, MenuItem } from '@mui/material';
import FolderCreator from './FolderCreator';

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

    const [files, setFiles] = useState([]);
    const [folders, setFolders] = useState([]);
  
    const createFile = (fileName) => {
      setFiles([...files, fileName]);
    };
  
    const createFolder = (folderName) => {
      setFolders([...folders, folderName]);
    };

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
        <FolderCreator onCreateFolder={createFolder} />
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
        <MenuItem> <FolderCreator onCreateFolder={createFolder} /></MenuItem>
        <MenuItem variant= "outline" onClick={handlFolderUpload}>Folder Upload</MenuItem>
        <MenuItem onClick={handleNewFileUpload}>File Upload</MenuItem>
      </Menu>
      <Typography sx={{paddingLeft:'1010px'}}>
        MSuriNaidu
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
