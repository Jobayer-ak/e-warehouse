import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = ({ item }) => {
  //hook
  const [user] = useAuthState(auth);

  // to get current display resulotion
  const displayWidth = window.innerWidth;

  const { _id, name, img, price, quantity, email, description, supplier } =
    item;

  // Delete item
  const handleDeleteItem = () => {
    const proceed = window.confirm("Are You Sure?");

    if (proceed) {
      const url = `http://localhost:5000/inventory/${_id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted Item!");
        });
    }
  };

  return (
    <div className="container">
      {user?.email === email ? (
        <div className="details d-sm-block d-md-flex d-lg-flex justify-content-md-around  align-items-center my-2 p-0">
          <img src={img} style={{ height: "200px", width: "300px" }} alt="" />
          <div className="spec">
            <h3>{name}</h3>

            <div className="pe-3 pb-0">
              <p>{description}</p>
            </div>
            <h6>Quantity: {quantity}</h6>
            <h6>Email: {email}</h6>
            <h6>Supplier: {supplier}</h6>
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

export default MyItem;
