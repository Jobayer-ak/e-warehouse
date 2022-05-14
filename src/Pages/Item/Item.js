import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  // hook
  const navigate = useNavigate();

  const { _id, name, price, description, img } = item;

  const navigateToItemDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <Card>
      <Card.Img className="top w-100" src={img} />
      <Card.Body>
        <h4>{name}</h4>
        <h6>Price: ${price}</h6>
        <p>{description}</p>
      </Card.Body>

      <button
        onClick={() => navigateToItemDetail(_id)}
        className="btn w-100 btn-secondary">
        Stock Update
      </button>
    </Card>
  );
};

export default Item;
