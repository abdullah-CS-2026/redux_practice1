import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const AddToCart = () => {
  const selector = useSelector(state => state.cart.items);
    // const selector = useSelector(state =>state.cart.cartCount);
   
    console.log(selector.length);
    
  return (
    <>
    <Link to="/cart" className="position-relative text-decoration-none fs-4">
            🛒
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {selector.length ? selector.length : 0 }
            </span>
          </Link>
    </>
  )
}
