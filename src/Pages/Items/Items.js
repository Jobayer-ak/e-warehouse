import React from "react";
import { useLocation } from "react-router-dom";
import useItems from "../../hooks/useItems";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  // hooks
  const location = useLocation();
  // custom hook
  const [items] = useItems();

  return (
    <div className="items-container mt-0">
      <div className="container">
        <h2 className="pt-2 pb-4 text-white fw-bold ">Inventory Items</h2>
        <div className="items d-sm-block d-md-grid d-lg-grid">
          {location.pathname === "/"
            ? items
                .slice(0, 6)
                .map((item) => <Item key={item._id} item={item}></Item>)
            : items.map((item) => <Item key={item._id} item={item}></Item>)}
        </div>
      </div>
    </div>
  );
};

export default Items;
