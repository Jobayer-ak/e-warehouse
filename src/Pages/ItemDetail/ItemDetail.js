import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ItemDetail = () => {
  //hook
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  const valueRef = useRef("");
  const [user] = useAuthState(auth);

  // fetch data from db
  useEffect(() => {
    const uri = `http://localhost:5000/inventory/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [isReload]);

  // reducing item quantity
  const handleReduceQuantity = (event) => {
    event.preventDefault();

    const quantity = Number(item.quantity) - 1;

    if (quantity >= 0 && user.email === item.email) {
      const upQ = { quantity };

      const url = `http://localhost:5000/inventory/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upQ),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("updated data: ", data);
          setIsReload(!isReload);
        });
    } else {
      console.log(user.email + " " + item.email);
      user.email !== item.email
        ? alert("We are sorry!!! Because, this item is not added by you!")
        : alert("There is no item! Please Add!!!");
    }
  };

  // Restock Item
  const handleUpdate = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.st.value);

    console.log(typeof quantity);

    const updateItem = { quantity };

    const url = `http://localhost:5000/inventory/${id}`;

    if (quantity > 0 && user.email === item.email) {
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("updated data: ", data);
          setIsReload(!isReload);
          event.target.reset();
        });
    } else {
      user.email !== item.email
        ? alert("We are sorry!!! Because, this item is not added by you!")
        : alert("There is no item! Please Add!!!");
    }
  };

  return (
    <div className="container">
      <div className="border d-flex justify-content-between my-3 p-3">
        <img
          src={item.img}
          style={{ height: "200px", width: "300px" }}
          alt=""
        />
        <div className="specification">
          <h2>Item: {item.name}</h2>
          <h5>ID: {item._id}</h5>
          <h2>Price: ${item.price}</h2>
          <p className="lead">Specification: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Email: {item.email}</p>
          <form onSubmit={handleReduceQuantity}>
            <input
              className="me-2 btn btn-secondary"
              type="submit"
              value="Delivered"
            />
          </form>
        </div>
      </div>
      <div>
        <h3>Restock Your Item</h3>
        <form onSubmit={handleUpdate}>
          <input type="number" name="st" />
          <br />
          <br />
          <input
            className="me-2 btn btn-secondary"
            type="submit"
            value="Stock"
          />
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;
