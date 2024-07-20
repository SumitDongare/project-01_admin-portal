import { createSlice } from "@reduxjs/toolkit";
const orderImage = 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fea56ab548a249aba1759f9f7e09b8fd_1885752063b_1.jpg.jpeg?q=90';
export const ordersSlice = createSlice({
    name : "Orders",
    initialState :[
        {
            "id": "1",
            "categoryId": "1",
            "name": "Smartphones",
            "totalItems": 2,
            "description": "Browse the latest smartphones",
            "imageUrl":orderImage,
            "price":"US$159",
            "status": "pending",
            "quantity":5
        },
        {
            "id": "2",
            "categoryId": "1",
            "name": "Laptops",
            "totalItems": 2,
            "description": "Choose from a variety of laptops",
            "imageUrl": orderImage,
            "price":"US$159",
            "status": "pending",
            "quantity":5
        },
        {
            "id": "3",
            "categoryId": "1",
            "name": "Accessories",
            "totalItems": 2,
            "description": "Enhance your devices with accessories",
            "imageUrl": orderImage,
            "price":"US$159",
            "status": "pending",
            "quantity":5
        },
        {
            "id": "4",
            "categoryId": "2",
            "name": "Men's Fashion",
            "totalItems": 2,
            "description": "Stay stylish with our men's fashion range",
            "imageUrl":orderImage,
            "price":"US$159",
            "status": "pending",
            "quantity":5
        },
    ],

    reducers :{
        setOrders: (state, action) =>{
            state = action.payload
        }
    }

})

export const {setSubCategories} = ordersSlice.actions;
export default ordersSlice.reducer