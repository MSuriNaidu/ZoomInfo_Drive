import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import FileTableRow from './FileTableRow';
import styled from '@emotion/styled';

const useStyles = styled({
  table: {
    minWidth: 650,
    "& .MuiTableCell-head": {
      fontWeight: 700
    }
  }
});

const FileTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}}>Size</TableCell>
            <TableCell sx={{fontWeight:'bold'}}>Last Modified</TableCell>
            <TableCell sx={{fontWeight:'bold'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <FileTableRow key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileTable;
