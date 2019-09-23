import React, { Component } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    score: 0
  };

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
