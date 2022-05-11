import React, { useEffect, useState } from "react";

const useProducts = () => {
  // hooks
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://secure-brook-46613.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useProducts;
