import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useItems from "../../hooks/useItems";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [items, setItems] = useItems();
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <h2 className="my-4">My Items</h2>

      {items.map((item) => (
        <MyItem key={item._id} item={item}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
