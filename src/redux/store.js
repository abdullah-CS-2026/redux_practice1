
import {configureStore} from '@reduxjs/toolkit';
import {cartReducer} from './slice';
import { productFetchReducer } from './productslice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        fetchProducts: productFetchReducer
    }
});

export default store;