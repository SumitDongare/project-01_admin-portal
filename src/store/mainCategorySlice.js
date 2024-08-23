import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../utils/ApiConstants";
import axios from 'axios';
import { fetchMainCategories } from "./thunks";

// export const fetchMainCategories = createAsyncThunk('fetch-main-categories', async()=> {

//     return axios.get(`${API_BASE_URL}/categories`)
//     .then(function (response){
//         //handle success
//         const data = response.data;
//         return data;
//     })
//     .catch(function (error){
//         //handle error
//         console.log("There is an error", error)
//     })
// })

export const mainCategorySlice = createSlice({
    name : "Main Categories",
    initialState :[],

    reducers :{
        setMainCategories: (state, action) =>{
            // console.log("My state", state)
            // console.log('Action', action)
            state = action.payload;
            return state
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchMainCategories.fulfilled, (state, action)=>{
            state = action.payload;
            return state;
        })

    }

})

export const {setMainCategories} = mainCategorySlice.actions;
export default mainCategorySlice.reducer