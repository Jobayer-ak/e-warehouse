import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  const style = {
    height: "400px",
  };
  return (
    <div
      style={style}
      className="w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
