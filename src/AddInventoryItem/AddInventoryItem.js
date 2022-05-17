import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const AddInventoryItem = () => {
  // hook
  const [user] = useAuthState(auth);

  // Add Item
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const url = `https://secure-brook-46613.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Successfully Your Item is Added!!!");
        e.target.reset();
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Add Inventory Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-50 mx-auto d-flex flex-column">
        <input
          className="mb-2"
          placeholder="Item Name"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <textarea
          className="mb-2"
          placeholder="Item Specification"
          {...register("description")}
        />

        <input
          className="mb-2"
          placeholder="Item Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Item Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-2"
          placeholder="Item Image URL"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-2"
          placeholder="Owner Email"
          type="email"
          value={user?.email}
          {...register("email")}
        />

        <input className="btn btn-secondary" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddInventoryItem;
