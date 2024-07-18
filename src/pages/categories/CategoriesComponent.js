import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainCategoriesList from "./main-categories/MainCategoriesList";
import SubCategoriesList from "./sub-categories/SubCategoriesList";
import CreateMainCategory from "./main-categories/CreateMainCategory";
import CreateSubCategory from "./sub-categories/CreateSubCategory";


export default function CategoriesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main-categories" replace={true} />}></Route>
      <Route path="main-categories" element={<MainCategoriesList></MainCategoriesList>}></Route>
      <Route path="main-categories/create" element={<CreateMainCategory></CreateMainCategory>}></Route>
      <Route path="sub-categories" element={<SubCategoriesList></SubCategoriesList>}></Route>
      <Route path="sub-categories/create" element={<CreateSubCategory></CreateSubCategory>}></Route>

    </Routes>
  );
}
