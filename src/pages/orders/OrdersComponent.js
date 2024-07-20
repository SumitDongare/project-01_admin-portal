import React from 'react'
import { useSelector } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import moment from 'moment';

export default function OrdersComponent() {

  const orders = useSelector((store) => store.orders);
 
  return (
    <div>
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Quantity</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                 <img src={row.imageUrl} width={40} height={40} ></img> {row.name}
                </TableCell>
                <TableCell >{ moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                <TableCell >{row.status}</TableCell>
                <TableCell >{row.price}</TableCell>
                <TableCell >{row.quantity}</TableCell>
                <TableCell ><div>Actions</div></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
