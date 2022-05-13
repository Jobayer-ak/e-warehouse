import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";

const Item = ({ item }) => {
  const { name, price, description, img } = item;
  return (
    <Card>
      <Card.Img className="top w-100" src={img} />
      <Card.Body>
        <h4>{name}</h4>
        <h6>Price: ${price}</h6>
        <p>{description}</p>
      </Card.Body>

      <button className="btn w-100 btn-secondary">UPDATE</button>
    </Card>
  );
};

export default Item;
