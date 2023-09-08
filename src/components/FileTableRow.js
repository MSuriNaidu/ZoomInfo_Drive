import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { CloudUpload } from '@mui/icons-material';

const FileTableRow = ({ item }) => {
  const handleDownload = () => {
    // Implement download functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.size}</TableCell>
      <TableCell>{item.lastModified}</TableCell>
      <TableCell>
        <IconButton onClick={handleDownload}>
          <CloudDownloadIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="upload">
        <CloudUpload />
       </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default FileTableRow;
