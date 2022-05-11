import React from "react";
import Banner from "../../Banner/Banner";
import Products from "../../Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
