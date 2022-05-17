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

  const displayWidth = window.innerWidth;
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
        });
    }
  };
  return (
    <div className="container my-5">
      {user.email === item.email ? (
        <div className="details d-sm-block d-md-flex d-lg-flex justify-content-around align-items-center my-2">
          <img src={img} style={{ height: "200px", width: "300px" }} alt="" />
          <div className="spec">
            <h3>{name}</h3>
            <div className="pe-3 pb-0">
              <p>{description}</p>
            </div>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <h5>Owner Email: {email}</h5>
            <h5 className="price">Price: ${price}</h5>
          </div>
          {displayWidth < 768 ? (
            <button
              onClick={handleDeleteItem}
              className="btn btn-danger my-3 remove-btn">
              Delete
            </button>
          ) : (
            <button
              onClick={handleDeleteItem}
              className="btn btn-danger my-3 remove-btn">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ManageInventoryItem;
