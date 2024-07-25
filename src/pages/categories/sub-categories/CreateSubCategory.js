import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, MenuItem, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Description } from "@mui/icons-material";
import axios from "axios";
import { API_BASE_URL } from "../../../utils/ApiConstants";
import { useSelector } from "react-redux";
import FileDragDrop from "../../../components/FileDragDrop";

export default function CreateSubCategory() {
  const navigate = useNavigate();
  const mainCategories = useSelector((store) => store.mainCategories);
  const [imageUrl, setImageUrl] = useState('')

  const validationSchema = yup.object({
    name: yup.string("Enter your email").required("Name is required"),
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
      console.log(values)
      axios
        .post(`${API_BASE_URL}/subCategories`, {
          "id": Math.floor(Math.random() * (100 - 10 + 1)) + 10, //Generate random id from 10-100
          "name": values.name,
          "description": values.description,
          "categoryId": values.categoryId, 
          imageUrl
        })
        .then(function (response) {
          // handle success
          // console.log("Categories Response",response.data);

         
          alert("Sub Category created!");
          
          navigate(-1);
        })
        .catch(function (error) {
          // handle error
          alert("Failed to create category");
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
          <h3>Add Sub Category</h3>
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
            rows={4}
            name="description"
            fullWidth
            label="Description"
            className="mb-3"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />

          <TextField
           
            select
            name="categoryId"
            label="Select"
            fullWidth
            defaultValue=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
            helperText = {formik.touched.categoryId && formik.errors.categoryId}

          >  
             <MenuItem  value=" " disabled> Select Category </MenuItem>
              {mainCategories.map(cat =>{
                return <MenuItem  value={cat.id}>

                {cat.name}
              </MenuItem>
              })}

          </TextField>

          <br></br>
          Category Image

          <FileDragDrop onFileDrop = {(file)=>{
            //API Call
            const url = "https://images.pexels.com/photos/26441311/pexels-photo-26441311/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

            setImageUrl(url)

          }}> </FileDragDrop>

          <Button variant="contained" type="submit" className="mt-5">
            Create Category
          </Button>
          <Button
            onClick={() => {
              navigate(-1); //is used for go to back url
            }}
          >
            {" "}
            Cancel
          </Button>
        </form>
      </Paper>
    </div>
  );
}
