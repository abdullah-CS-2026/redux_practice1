import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartCount:0
}
const addToCart = createSlice({
    name:"cart",
    initialState,
    reducers:{ 
        addItem:(state)=>{
        state.cartCount+=1;
    }
 }
});

export const {addItem} = addToCart.actions;
export const cartReducer = addToCart.reducer;