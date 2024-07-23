import { createSlice } from "@reduxjs/toolkit";

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
    }

})

export const {setMainCategories} = mainCategorySlice.actions;
export default mainCategorySlice.reducer