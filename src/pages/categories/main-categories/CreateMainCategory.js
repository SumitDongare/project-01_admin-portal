import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Description } from '@mui/icons-material';
import axios from 'axios';
import { API_BASE_URL } from '../../../utils/ApiConstants';


export default function CreateMainCategory({getCategories}) {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string("Enter your email")
      .required("Name is required"),
    description: yup
      .string("Enter description")
      .min(3, "Description should be of minimum 3 characters length")
      .required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },

    validationSchema: validationSchema,
 
    onSubmit: (values) => {
      // API call
      axios.post(`${API_BASE_URL}/categories`, {
        "id":Math.floor(Math.random()*(100 - 10 + 1)) + 10,  //Generate random id from 10-100
        "name" : values.name,
        "description" : values.description

      })
      .then(function (response) {
        // handle success
        // console.log("Categories Response",response.data);
    
        // const data = response.data;
        alert('Category created!');
        getCategories();
           navigate(-1)
        
    
      })
      .catch(function (error) {
        // handle error
        alert('Failed to create category');
        console.log("There is an error", error);
      })
      .finally(function () {
        // always executed
      });
    },
  });

  return (
    <div className="create-main-category-component ">
      <Paper elevation={3} className="form-container p-3">
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={formik.handleSubmit}
        >
          <h3>Add Category</h3>
          <TextField
            name="name"
            fullWidth
            label="Category Name"
            className="mb-3"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.name)}
            helperText={formik.touched.email && formik.errors.name}
          />

          <TextField
             multiline
             maxRows={4}
            name="description"
            fullWidth
            label="Description"
            className="mb-3"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />

          <Button variant="contained" type="submit">
            Create Category
          </Button>
          <Button onClick={()=>{
             navigate(-1)         //is used for go to back url
          }} > Cancel</Button>
        </form>
      </Paper>
    </div>
  );
}
