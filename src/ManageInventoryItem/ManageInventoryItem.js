import React from "react";
import Item from "../Pages/Item/Item";
import "./ManageInventoryItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const ManageInventoryItem = ({ item }) => {
  // hook
  const [user] = useAuthState(auth);

  const { _id, name, price, quantity, description, img, email, supplier } =
    item;

  // Delete item
  const handleDeleteItem = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/inventory/${_id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted item!");
          console.log(data);
        });
    }
  };
  return (
    <div className="container my-5">
      {user.email === item.email ? (
        <div className="details d-flex justify-content-around align-items-center my-2">
          <img src={img} style={{ height: "200px", width: "300px" }} alt="" />
          <div className="spec">
            <h3>{name}</h3>

            <p>{description}</p>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <h5>Owner Email: {email}</h5>
            <h5 className="price">Price: ${price}</h5>
          </div>
          <button
            onClick={handleDeleteItem}
            className="btn delete-btn btn-danger">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ManageInventoryItem;
