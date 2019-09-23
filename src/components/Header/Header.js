import React from "react";
import "./headerStyle.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-brand">Clicky Game</li>
        <li>Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Header;
