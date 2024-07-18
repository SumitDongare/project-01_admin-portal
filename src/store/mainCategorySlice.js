import { createSlice } from "@reduxjs/toolkit";

export const mainCategorySlice = createSlice({
    name : "Main Categories",
    initialState :[
        {
            id:'1',
            name:"Electronics"
        },
        {
            id:'2',
            name:"Clothes"
        }
    ],

    reducers :{
        setMainCategories: (state, action) =>{
            state = action.payload
        }
    }

})

export const {setMainCategories} = mainCategorySlice.actions;
export default mainCategorySlice.reducer