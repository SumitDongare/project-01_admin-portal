import { createSlice } from "@reduxjs/toolkit";
const orderImage = 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fea56ab548a249aba1759f9f7e09b8fd_1885752063b_1.jpg.jpeg?q=90';
export const ordersSlice = createSlice({
    name : "Orders",
    initialState :[],

    reducers :{
        setOrders: (state, action) =>{
            state = action.payload
            return state;
        }
    }

})

export const {setOrders} = ordersSlice.actions;
export default ordersSlice.reducer