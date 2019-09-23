import React from "react";
import "./headerStyle.css";

function Header(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-brand" id="brand">
          Clicky Game
        </li>
        <li>{props.message}</li>
        <li>
          Score: {props.score} | Top Score: {props.topscore}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
