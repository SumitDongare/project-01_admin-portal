import { configureStore } from '@reduxjs/toolkit';
import mainCategorySlice from './mainCategorySlice';
import subCategorySlice from './subCategorySlice';
import ordersSlice from './ordersSlice';

export const store = configureStore({
  reducer: {
    mainCategories:mainCategorySlice,
    subCategories:subCategorySlice,
    orders:ordersSlice
  },
})