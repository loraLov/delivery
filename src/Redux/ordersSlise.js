import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState:{
        selectedCategory: 'ALL'
    },
    reducers: {
         listCategory: (state, action) => {
            state.selectedCategory = action.payload;
         }
    }
})

export const getSelectedCategory = state => state.orders.selectedCategory;
export const {listCategory} = ordersSlice.actions;
export default ordersSlice.reducer;