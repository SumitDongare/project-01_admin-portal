import { configureStore } from '@reduxjs/toolkit';
import mainCategorySlice from './mainCategorySlice';
import subCategorySlice from './subCategorySlice';
import ordersSlice from './ordersSlice';
import productsSlice from './productsSlice';

export const store = configureStore({
  reducer: {
    mainCategories:mainCategorySlice,
    subCategories:subCategorySlice,
    products:productsSlice,
    orders:ordersSlice,
  },
})