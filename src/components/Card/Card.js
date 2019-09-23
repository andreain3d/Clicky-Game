import React from "react";
import "./cardStyle.css";

function Card(props) {
  return (
    <div className="cat-card" onClick={() => props.userClicked(props.name)}>
      <img src={props.src} className="cat-img" alt={props.name}></img>
    </div>
  );
}

export default Card;
