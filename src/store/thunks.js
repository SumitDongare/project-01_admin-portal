import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../utils/ApiConstants";

export const fetchMainCategories = createAsyncThunk('fetch-main-categories', async()=> {

    return axios.get(`${API_BASE_URL}/categories`)
    .then(function (response){
        //handle success
        const data = response.data;
        return data;
    })
    .catch(function (error){
        //handle error
        console.log("There is an error", error)
    })
})