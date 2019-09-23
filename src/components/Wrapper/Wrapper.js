import React from "react";
import "./wrapperStyle.css";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="wrapper d-flex flex-wrap justify-content-center">
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;
