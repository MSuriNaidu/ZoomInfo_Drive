import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const FolderCreator = ({ onCreateFolder }) => {
  const [open, setOpen] = useState(false);
  const [folderName, setFolderName] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateFolder = () => {
    onCreateFolder(folderName);
    setFolderName('');
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
      New Folder
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="folder-name"
            label="Folder Name"
            type="text"
            fullWidth
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FolderCreator;
