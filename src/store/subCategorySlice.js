import { createSlice } from "@reduxjs/toolkit";

export const subCategorySlice = createSlice({
    name : "Sub Categories",
    initialState :[
        {
            id:'1',
            name:"Mobile Phone"
        }
    ],

    reducers :{
        setSubCategories: (state, action) =>{
            state = action.payload
        }
    }

})

export const {setSubCategories} = subCategorySlice.actions;
export default subCategorySlice.reducer