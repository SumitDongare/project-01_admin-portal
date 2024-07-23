import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from "react-redux";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import { useState } from "react";
import { createPortal } from "react-dom";



export default function MainCategoriesList() {
  const mainCategories = useSelector((store) => store.mainCategories);
  const navigate = useNavigate();
  const [deletDialogOpen, setDeleteDialogOpen] = useState(false)
 

  return (
    <div>
      <ConfirmationDialog title="Confirm?" description="Do you want to delete?" open={deletDialogOpen} handleClose={(flag)=>{
        setDeleteDialogOpen(false)
        if(flag){
          alert('Deleting!')
        }
      }}></ConfirmationDialog>

      {createPortal(<div>I am in Main Categories: {deletDialogOpen +''} </div>, document.body )}
      
      <Button  variant="contained" onClick={()=>{
        navigate('create')
      }}>Add Category</Button>
      <br></br>
      <br></br>
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
                <TableCell ><DeleteOutlineOutlinedIcon onClick={()=>setDeleteDialogOpen(true)} ></DeleteOutlineOutlinedIcon></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
