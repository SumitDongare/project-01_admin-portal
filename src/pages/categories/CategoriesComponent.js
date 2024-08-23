
import { Navigate, Route, Routes } from "react-router-dom";
import MainCategoriesList from "./main-categories/MainCategoriesList";
import SubCategoriesList from "./sub-categories/SubCategoriesList";
import CreateMainCategory from "./main-categories/CreateMainCategory";
import CreateSubCategory from "./sub-categories/CreateSubCategory";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMainCategories } from "../../store/mainCategorySlice";
import axios from 'axios';
import { API_BASE_URL } from "../../utils/ApiConstants";
import { ErrorBoundary } from "../../components/ErrorBoundary";


export default function CategoriesComponent() {
  const dispatch = useDispatch();

  const getCategories = useCallback(() =>{
    
      axios.get(`${API_BASE_URL}/categories`)
      .then(function (response) {
        // handle success
        console.log("Categories Response",response.data);
    
        const data = response.data;
        dispatch(setMainCategories(data))
    
      })
      .catch(function (error) {
        // handle error
        console.log("There is an error", error);
      })
      .finally(function () {
        // always executed
      });
    },[])

  useEffect(()=>{
    //API Call
    getCategories()
         
  },[]) 
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main-categories" replace={true} />}></Route>
      <Route path="main-categories" element={<ErrorBoundary> <MainCategoriesList getCategories={getCategories} ></MainCategoriesList> </ErrorBoundary> }></Route>
      <Route path="main-categories/create" element={<CreateMainCategory getCategories={getCategories}></CreateMainCategory>}></Route>
      <Route path="sub-categories" element={<SubCategoriesList></SubCategoriesList>}></Route>
      <Route path="sub-categories/create" element={<CreateSubCategory></CreateSubCategory>}></Route>

    </Routes>
  );
}
