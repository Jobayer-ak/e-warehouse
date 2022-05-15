import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Items from "../../Items/Items";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Items></Items>
      <Link to="/manageInventory">
        <button className="btn btn-info my-3">Manage Inventories</button>
      </Link>
    </div>
  );
};

export default Home;
