import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from '@emotion/styled';
import { Menu, MenuItem } from '@mui/material';
import FolderCreator from './FolderCreator';
import FileUploader from './FileUploader';
import FolderUploader from './FolderUploader';

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

    const [folders, setFolders] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedFolders, setUploadedFolders] = useState([]);
  
    const handleFileUpload = (file) => {
      setUploadedFiles([...uploadedFiles, file.name]);
    };
  
    const handleFolderUpload = (folderName) => {
      setUploadedFolders([...uploadedFolders, folderName]);
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
      alert("folder upload");
        //setAnchorEl(null);
        <FolderUploader onFolderUpload={handleFolderUpload} />
      };

      const handleNewFileUpload = () => {
        setAnchorEl(null);
        <FileUploader onFileUpload={handleFileUpload} />
      };
  
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
      {/* <img src="ZoomInfo_Z_Logo.jpg" alt="logo" style={{maxWidth: '120px'}} /> */}
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
        <MenuItem> <FileUploader onFileUpload={handleFileUpload} /></MenuItem>
        <MenuItem>  <FolderUploader onFolderUpload={handleFolderUpload} /></MenuItem>
      </Menu>
      <Typography sx={{paddingLeft:'1010px'}}>
        MSuriNaidu
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
