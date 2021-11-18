import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items:[],
    totalQuantity:0,
    totalPrice:0, 
}

const reducers = {
    addToCart(state, action){
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        state.totalQuantity++;
        state.totalPrice += +(newItem.price);
        if(!existingItem){
            state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: +(newItem.price), name: newItem.title, image: newItem.image});
        }else{
            existingItem.quantity++;
            existingItem.totalPrice += +(newItem.price);
        }
    },

    removeFromCart(state, action){
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        state.totalPrice -= +(existingItem.price);
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id);
        }else{
            existingItem.quantity--;
            existingItem.totalPrice -= +(existingItem.price);
        }
    },

    emptyTheCart(state){
        state.items = [];
        state.totalPrice = state.totalQuantity = 0;
    }
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:reducers
})

export const cartActions = cartSlice.actions;

export default cartSlice;