import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = ({ item }) => {
  //hook
  const [user] = useAuthState(auth);

  const { name, img, price, quantity, email, description, supplier } = item;

  // handle Delete button
  const handleDeleteItem = () => {
    console.log("From my item ");
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
