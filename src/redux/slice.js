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
    },
    removeItem: (state)=>{
        if(state.cartCount>0){
            state.cartCount-=1;
        }
    },
    clearCart:(state)=>{
        state.cartCount=0;
    }
 }
});
export const {addItem, removeItem, clearCart} = addToCart.actions;
export const cartReducer = addToCart.reducer;