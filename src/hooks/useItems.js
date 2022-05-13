import React, { useEffect, useState } from "react";

const useItems = () => {
  // hooks
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "https://secure-brook-46613.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setIroducts(data));
  }, [items]);
  return [items, setItems];
};

export default useItems;
