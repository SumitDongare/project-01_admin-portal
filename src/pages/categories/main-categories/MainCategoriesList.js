import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { setMainCategories } from "../../../store/mainCategorySlice";
import axios from 'axios';

export default function MainCategoriesList() {
  const mainCategories = useSelector((store) => store.mainCategories);
  const dispatch = useDispatch();

  useEffect(()=>{
    //API Call

    axios.get('http://localhost:3001/categories')
  .then(function (response) {
    // handle success
    console.log("Categories Response",response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    const data = [ {
      "id": "1",
      "name": "Electronics",
      "description": "Explore a wide range of electronic items"
    },
    {
      "id": "2",
      "name": "Clothing",
      "createdAt": "2024-03-14T09:30:00Z",
      "description": "Discover trendy clothing for all ages"
    },];

    dispatch(setMainCategories(data))
   
       
  },[]) 


  return (
    <div>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mainCategories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.description}</TableCell>
                <TableCell >{ moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                <TableCell ><div>Actions</div></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
