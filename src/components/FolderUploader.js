import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';

const FolderUploader = ({ onFolderUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const folderName = acceptedFiles[0].path; // Use the folder path as the name
      onFolderUpload(folderName);
    }
  }, [onFolderUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    directory: true, // Allow directory uploads
  });

  return (
    <div>
      <Button {...getRootProps()}>
        Upload Folder
      </Button>
      <Dialog open={false}>
        <DialogTitle>Upload a Folder</DialogTitle>
        <DialogActions>
          <Button onClick={() => {}}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <input {...getInputProps()} style={{ display: 'none' }} />
    </div>
  );
};

export default FolderUploader;
