import React, { useEffect, useState } from "react";

const useItems = () => {
  // hooks
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/items";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return [items];
};

export default useItems;
