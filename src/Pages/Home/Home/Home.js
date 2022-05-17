import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import Banner from "../../Banner/Banner";
import Items from "../../Items/Items";
import ClientFeedBack from "../ClientFeedBack/ClientFeedBack";
import Why from "../Why/Why";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Items></Items>
      <Link to="/manageInventory">
        <button className="btn btn-info my-3">Manage Inventories</button>
      </Link>
      <ClientFeedBack></ClientFeedBack>
      <Why></Why>
    </div>
  );
};

export default Home;
