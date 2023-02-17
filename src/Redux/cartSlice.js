import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartOrders: []
    },
    reducers: {
         addOrderToCart: (state, action) => {
            const timeId = new Date().getTime();
            state.cartOrders.push ({
                id:timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalSum: action.payload.quantity * action.payload.dish.price
            })
         },
         removeOrderFromCart:(state, action) =>{
            state.cartOrders = state.cartOrders.filter(
                cartOrder => cartOrder.id !== action.payload.cartOrderId
            )
         }
    }
})
export const getTotalSum = state => {
    return state.cart.cartOrders.reduce((total, cartOrders)=>{
        return cartOrders.totalSum + total
    },0)
}

export const getCartOrders = state => state.cart.cartOrders;
export const {addOrderToCart, removeOrderFromCart} = cartSlice.actions;
export default cartSlice.reducer;