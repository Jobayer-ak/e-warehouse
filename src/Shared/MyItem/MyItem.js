import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = ({ item }) => {
  //hook
  const [user] = useAuthState(auth);

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
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      {user?.email === email ? (
        <div className="details d-flex justify-content-around align-items-center my-2">
          <img src={img} style={{ height: "200px", width: "300px" }} alt="" />
          <div className="spec">
            <h3>{name}</h3>

            <p>{description}</p>
            <h6>Quantity: {quantity}</h6>
            <h6>My Email: {email}</h6>
            <h6>Supplier: {supplier}</h6>
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

export default MyItem;
