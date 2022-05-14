import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useItemDetail from "../../hooks/useItemDetail";
import { useForm } from "react-hook-form";

const ItemDetail = () => {
  const [reload, setReload] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useItemDetail([]);
  const valueRef = useRef("");

  let updatedQuantity;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [reload]);

  const handleReduceQuantity = (quantity) => {
    updatedQuantity = parseInt(quantity - 1);

    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
    console.log(id);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        setReload(!reload);
        console.log(reload);
        setItem(result);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://secure-brook-46613.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  // const handleRestock = (event) => {
  //   event.preventDefault();
  //   const value = valueRef.current.value;
  //   const url = `https://secure-brook-46613.herokuapp.com/items`;

  //   fetch(url, {
  //     method: "POsT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(value),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  // };

  return (
    <div className="container">
      <div className="border p-3">
        <img
          src={item.img}
          style={{ height: "200px", width: "300px" }}
          alt=""
        />
        <h2>Item: {item.name}</h2>
        <h5>ID: {item._id}</h5>
        <h2>Price: ${item.price}</h2>
        <p className="lead">Specification: {item.description}</p>
        <p>Quantity: {updatedQuantity}</p>
        <button
          onClick={() => handleReduceQuantity(item.quantity)}
          className="btn btn-secondary">
          Delivered
        </button>
      </div>
      <div className="my-4">
        <h2>Restock the items</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            className="mb-2"
            placeholder="Name"
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />

          <textarea
            className="mb-2"
            placeholder="Description "
            {...register("description")}
          />

          <input
            className="mb-2"
            placeholder=" Price"
            type="number"
            {...register("price")}
          />
          <input
            className="mb-2"
            placeholder="Image URL"
            type="text"
            {...register("img")}
          />
          <input
            className="mb-2"
            placeholder="Item Quantity"
            type="text"
            {...register("quantity")}
          />

          <input type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;
