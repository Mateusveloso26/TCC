import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function createData(codigo: string, descricao:string) {
  return { codigo, descricao };
}

const rows = [
  createData('001', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('002', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('003', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('004', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('005', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('006', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('007', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('008', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('009', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('010', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('011', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
  createData('012', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, orci non laoreet accumsan, lacus libero convallis urna, a sollicitudin erat nisi et nulla. Phasellus at lectus sit amet augue malesuada viverra. '),
];

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell>{row.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
