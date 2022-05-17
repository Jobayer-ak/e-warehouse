import React, { useEffect, useState } from "react";

const useItems = () => {
  // hooks
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "https://secure-brook-46613.herokuapp.com/items";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);
  return [items];
};

export default useItems;
