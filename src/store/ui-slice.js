import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible: false,
    isCheckoutValid: false,
    isTNCChecked: false,
};

const reducers = {
    toggleHandler(state){
        state.cartIsVisible = !state.cartIsVisible;
    },

    toggleCheckoutHandler(state){
        state.isCheckoutValid = !state.isCheckoutValid;
    },

    toggleTNCHandler(state, action){
        state.isTNCChecked = action.payload;
    },
};

const uiSlice = createSlice({
    name:"ui",
    initialState:initialState,
    reducers:reducers
})

export const uiActions = uiSlice.actions;

export default uiSlice;