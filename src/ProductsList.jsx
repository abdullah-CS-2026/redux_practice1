import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productslice";
import { addItem } from "./redux/slice";

export const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.fetchProducts.items
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {products?.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {product.title}
                </h5>

                <p className="card-text">
                  {product.description.slice(0, 80)}...
                </p>

                <h4 className="text-success">
                  ${product.price}
                </h4>

                <p>
                  ⭐ {product.rating}
                </p>

                <span className="badge bg-primary">
                  {product.category}
                </span>
              </div>
              <button className="badge bg-primary" onClick={()=>dispatch(addItem(product))}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};