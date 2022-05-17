import React from "react";
import { Link, useParams } from "react-router-dom";
import useItems from "../hooks/useItems";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";

const ManageInventory = () => {
  // hook
  const [items] = useItems();

  return (
    <div className="container">
      <div className="d-md-flex d-lg-flex justify-content-center align-items-center gap-5">
        <h2 className="my-3 text-success">Manage Inventories</h2>
        <Link to="/addInventoryItem">
          <button className="btn btn-secondary mt-2 ms-5">
            Add Inventory Item
          </button>
        </Link>
      </div>
      {items.map((item) => (
        <ManageInventoryItem key={item._id} item={item}></ManageInventoryItem>
      ))}
    </div>
  );
};

export default ManageInventory;
