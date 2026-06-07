import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from './redux/productslice';
export const ProductsList = () => {
    const dispatch =useDispatch();
    const selector =useSelector(state =>state);
console.log(selector);
console.log(selector.fetchProducts.items);
    useEffect(() => {
          dispatch(fetchProducts());
    }, [])
  return (
      
        <>
    
    </>
  )
}
