import React from "react";
import { useLocation } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  // hooks
  const location = useLocation();
  // custom hook
  const [products] = useProducts();

  return (
    <div className="products-container mt-0">
      <div className="container">
        <h2 className="py-4 text-white">Available Products</h2>
        <div className="products">
          {location.pathname === "/products"
            ? products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
            : products
                .slice(0, 6)
                .map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
