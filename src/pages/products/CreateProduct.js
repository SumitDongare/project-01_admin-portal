import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Description } from "@mui/icons-material";
import axios from "axios";
import { API_BASE_URL } from "../../utils/ApiConstants";
import { useDispatch, useSelector } from "react-redux";
import { setSubCategories } from "../../store/subCategorySlice";
import FileDragDrop from "../../components/FileDragDrop";

export default function CreateProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const subCategoriesData = useSelector((store) => store.subCategories);

  // console.log("subCategoriesData", subCategoriesData)

  useEffect(() => {
    //API Call
    axios
      .get(`${API_BASE_URL}/subCategories`)
      .then(function (response) {
        // handle success
        // console.log("Categories Response",response.data);

        const data = response.data;
        dispatch(setSubCategories(data));
      })
      .catch(function (error) {
        // handle error
        console.log("There is an error", error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const validationSchema = yup.object({
    productName: yup
      .string("Enter Product Name")
      .required("Product Name is required"),
    description: yup
      .string("Enter description")
      .min(3, "Description should be of minimum 3 characters length")
      .required("Description is required"),
    subCategoryId: yup
      .number("Should be a number")
      .required("Sub Category is required"),
    brand: yup.string("Enter Brand Name").required("Brand Name is required"),
    status: yup.string("Enter Status").required("Status is required"),
    sizes: yup.string("Enter Sizes").required("Sizes required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      subCategoryId: "",
      brand: "",
      status: "",
      sizes: "",
      productCode: "",
      productSku: "",
      availableQuantity: 0,
      gender: "female",
      isFeatured: false,
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values);
      // API call
      // axios.post(`${API_BASE_URL}/categories`, {
      //   "id":Math.floor(Math.random()*(100 - 10 + 1)) + 10,  //Generate random id from 10-100
      //   "name" : values.name,
      //   "description" : values.description

      // })
      // .then(function (response) {
      //   // handle success
      //   // console.log("Categories Response",response.data);

      //   // const data = response.data;
      //   alert('Category created!');
      //   // getCategories();
      //      navigate(-1)

      // })
      // .catch(function (error) {
      //   // handle error
      //   alert('Failed to create category');
      //   console.log("There is an error", error);
      // })
      // .finally(function () {
      //   // always executed
      // });
    },
  });

  return (
    <div className="create-main-category-component ">
      <Paper elevation={3} className="form-container p-3">
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={formik.handleSubmit}
        >
          <h3>Add Product</h3>
          <TextField
            name="productName"
            fullWidth
            label="Product Name"
            className="mb-3"
            value={formik.values.productName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.productName && Boolean(formik.errors.productName)
            }
            helperText={formik.touched.productName && formik.errors.productName}
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
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <div className="row w-100">
            <div className="col">
              <TextField
                name="subCategoryId"
                fullWidth
                select
                label="Category"
                className="mb-3"
                value={formik.values.subCategoryId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.subCategoryId &&
                  Boolean(formik.errors.subCategoryId)
                }
                helperText={
                  formik.touched.subCategoryId && formik.errors.subCategoryId
                }
              >
                <MenuItem value={""} disabled>
                  Select Category
                </MenuItem>
                {subCategoriesData?.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col">
              <TextField
                name="brand"
                fullWidth
                label="Brand"
                className="mb-3"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                helperText={formik.touched.brand && formik.errors.brand}
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="col">
              <TextField
                name="status"
                fullWidth
                select
                label="Status"
                className="mb-3"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              >
                <MenuItem value={""} disabled>
                  Select Status
                </MenuItem>
                {["In Stock", "Low Stock"]?.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col">
              <TextField
                name="sizes"
                fullWidth
                label="Sizes"
                className="mb-3"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sizes && Boolean(formik.errors.sizes)}
                helperText={formik.touched.sizes && formik.errors.sizes}
              />
            </div>
          </div>
          Product Image
          <FileDragDrop
            onFileDrop={(file) => {
              //API Call
              const url =
                "https://images.pexels.com/photos/26441311/pexels-photo-26441311/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

              setImageUrl(url);
            }}
          >
            {" "}
          </FileDragDrop>
          <TextField
            name="productCode"
            fullWidth
            label="Product Code"
            className="mb-3"
            value={formik.values.productCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.productCode && Boolean(formik.errors.productCode)
            }
            helperText={formik.touched.productCode && formik.errors.productCode}
          />
          <TextField
            name="productSku"
            fullWidth
            label="Product SKU"
            className="mb-3"
            value={formik.values.productSku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.productSku && Boolean(formik.errors.productSku)
            }
            helperText={formik.touched.productSku && formik.errors.productSku}
          />
          Gender
          <RadioGroup
            className="d-flex"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
            name="gender"
          >
            <div className="d-flex align-items-center">
              <Radio value="male" /> Male
              <Radio value="female" />
              Female
              <Radio value="kids" />
              Kids
              <Radio value="others" />
              Others
            </div>
          </RadioGroup>
          <TextField
            name="availableQuantity"
            fullWidth
            type="number"
            label="Quantity"
            className="mb-3"
            value={formik.values.availableQuantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.availableQuantity &&
              Boolean(formik.errors.availableQuantity)
            }
            helperText={
              formik.touched.availableQuantity &&
              formik.errors.availableQuantity
            }
          />
          <TextField
            name="regularPrice"
            fullWidth
            label="Regular Price"
            className="mb-3"
            value={formik.values.regularPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.regularPrice && Boolean(formik.errors.regularPrice)
            }
            helperText={
              formik.touched.regularPrice && formik.errors.regularPrice
            }
          />
          <TextField
            name="salePrice"
            fullWidth
            label="Sale Price"
            className="mb-3"
            value={formik.values.salePrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salePrice && Boolean(formik.errors.salePrice)}
            helperText={formik.touched.salePrice && formik.errors.salePrice}
          />
          <div>
            <Switch
              name="isFeatured"
              value={formik.touched.isFeatured}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.isFeatured && Boolean(formik.errors.isFeatured)
              }
              helperText={formik.touched.isFeatured && formik.errors.isFeatured}
            />
            Featured Product
          </div>
          <Button variant="contained" type="submit">
            Create Product
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
