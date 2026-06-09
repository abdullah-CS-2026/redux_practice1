import {createSlice} from "@reduxjs/toolkit";
const initialState={
    items:[],
    // cartCount:0
}
const addToCart = createSlice({
    name:"cart",
    initialState,
    reducers:{ 
        addItem:(state,action)=>{  // action contains the payload(data) which is the product object that we want to add to the cart
        const existingItem = state.items.find((item)=>item.id ==action.payload.id);
        if(!existingItem){
            state.items.push(action.payload);
        }
        
        // state.cartCount+=1;
    },
    removeItem: (state,action)=>{
        state.items = state.items.filter(item => item.id !== action.payload.id);
        // if(state.cartCount>0){
        //     state.cartCount-=1;
        },
        clearCart:(state)=>{
            state.items=[];
            // state.cartCount=0;
        }
    },
 
});
export const {addItem, removeItem, clearCart} = addToCart.actions;
export const cartReducer = addToCart.reducer;