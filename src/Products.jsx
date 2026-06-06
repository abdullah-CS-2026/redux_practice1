import React from "react";
import { addItem } from "./redux/slice";
import {useDispatch} from 'react-redux';
const Products = () => {

  const dispatch= useDispatch();
  const product = {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "Premium wireless headphones with noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: "22rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>

          <h5 className="text-success">${product.price}</h5>

          <p className="card-text">{product.description}</p>

          <button
            className="btn btn-primary w-100"
            onClick={() => dispatch(addItem())}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;