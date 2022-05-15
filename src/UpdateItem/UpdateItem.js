import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItems from "../hooks/useItems";

const UpdateItem = () => {
  const { id } = useParams();
  //   const [item, setItem] = useState({});
  const [item] = useItems();

  const [isReload, setIsReload] = useState(false);

  //   useEffect(() => {
  //     const url = "http://localhost:5000/items";

  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setItem(data));
  //   }, [isReload]);

  // update item
  const handleUpdate = (event) => {
    event.preventDefault();
    const quantity = event.target.st.value;
    console.log(quantity);

    const updateItem = { quantity };

    const url = `http://localhost:5000/inventory/${id}`;

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
      });
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleUpdate}>
        <input type="number" name="st" />
        <br />
        <br />
        <input className="me-2 btn btn-secondary" type="submit" value="Stock" />
      </form>
    </div>
  );
};

export default UpdateItem;
