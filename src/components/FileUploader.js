import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const FileUploader = ({ onFileUpload }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        Upload File
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload a File</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FileUploader;
