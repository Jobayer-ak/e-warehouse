import React from "react";
import Banner from "../../Banner/Banner";
import Items from "../../Items/Items";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Items></Items>
    </div>
  );
};

export default Home;
