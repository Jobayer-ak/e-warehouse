import React from "react";
import Item from "../Pages/Item/Item";
import "./ManageInventoryItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageInventoryItem = ({ item }) => {
  const { _id, name, price, quantity, description, img, supplier } = item;

  // Delete item
  const handleDeleteItem = () => {
    const url = `http://localhost:5000/inventory/${_id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Deleted item!");
        console.log(data);
      });
  };
  return (
    <div className="container my-5">
      <div className="details d-flex justify-content-around align-items-center my-2">
        <img src={img} style={{ height: "200px", width: "300px" }} alt="" />
        <div className="spec">
          <h3>{name}</h3>

          <p>{description}</p>
          <h6>Quantity: {quantity}</h6>
          <h6>Supplier: {supplier}</h6>
          <h5 className="price">Price: ${price}</h5>
        </div>
        <button
          onClick={handleDeleteItem}
          className="btn delete-btn btn-danger">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ManageInventoryItem;
