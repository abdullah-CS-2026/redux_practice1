import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts =createAsyncThunk('products', async()=>{
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
    })

const initialState = {
    items:[],
    status:undefined,
    error:null
}

const productSlice = createSlice({
    name:'products',
    initialState,
    extraReducers:(builder)=>{
           builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status='loading';
           })
           builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.status='success';
           })
           builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
           })
    }
})

export const productFetchReducer = productSlice.reducer;