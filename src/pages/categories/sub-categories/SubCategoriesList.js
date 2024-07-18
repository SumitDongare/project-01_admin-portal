import React from 'react'
import { useSelector } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import moment from 'moment';

export default function SubCategoriesList() {
  const mainCategories = useSelector((store) => store.mainCategories);

  const mapping = mainCategories.reduce((mapp, category)=>{
     mapp[category.id] = category.name
     return mapp    
  }, {})

  console.log(mapping)
  
  const subCategoriesData = useSelector((store) => store.subCategories);

  const subCategories = subCategoriesData.map(subCategory => {
    return {...subCategory, mainCategory : mapping[subCategory.categoryId] }
  })
  
  console.log(subCategories)

  return (
    <div>
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell >Main Category</TableCell>
              <TableCell >Total Items</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subCategories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                 <img src={row.imageUrl} width={40} height={40} ></img> {row.name}
                </TableCell>
                <TableCell >{row.mainCategory}</TableCell>
                <TableCell >{row.totalItems}</TableCell>
                <TableCell >{ moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                <TableCell ><div>Actions</div></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
