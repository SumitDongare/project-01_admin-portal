import React from 'react'
import { Button, Chip, Paper, Rating, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from "react-redux";
import moment from 'moment';
import { useNavigate } from "react-router-dom";



export default function ProductList() {
    const products = useSelector((store) => store.products);
    console.log(products)
    const navigate = useNavigate();
   
   
  
    return (
      <div> 
        <Button  variant="contained" onClick={()=>{
          navigate('/pages/products/create')
        }}>Add Product</Button>
        <br></br>
        <br></br>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell >Created At</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Rating</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Featured</TableCell>
                <TableCell >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img className="mx-1" width={30} height={30} src="https://fastly.picsum.photos/id/415/536/354.jpg?hmac=btwxhNonil-ZGpQuM9f5B62gV3I85HPtR8HEMTtyHDk"></img>
                    {row.productName}
                  </TableCell>
                  <TableCell >{ moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                  <TableCell ><Chip label={row.status} color={row.status==="In Stock"?"success":"warning"} /></TableCell>
                  <TableCell > <Rating value={row.rating}/></TableCell>
                  <TableCell >${row.salePrice}</TableCell>
                  <TableCell ><Switch checked={row.isFeatured} /></TableCell>
                  <TableCell ><DeleteOutlineOutlinedIcon ></DeleteOutlineOutlinedIcon></TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}
