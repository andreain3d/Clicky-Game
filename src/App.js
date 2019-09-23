import React, { Component } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import cats from "./cats.json";
import "./App.css";

class App extends Component {
  state = {
    cats,
    catsGuessed: [],
    score: 0,
    topscore: 0,
    message: ""
  };

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  newTopScore = () => {
    if (this.state.score > this.state.topscore) {
      let currentScore = this.state.score;
      this.setState({
        catsGuessed: [],
        score: 0,
        topscore: currentScore,
        message: "You guessed incorrectly."
      });
    } else {
      this.setState({
        catsGuessed: [],
        score: 0,
        message: "You guessed incorrectly."
      });
    }
  };

  userClicked = name => {
    console.log("Name of item clicked:" + name);
    console.log("catsGuessed on click:" + this.state.catsGuessed);
    console.log(this.state.catsGuessed.indexOf(name));
    if (this.state.catsGuessed.indexOf(name) > -1) {
      this.newTopScore();
    } else {
      const catsGuessed = this.state.catsGuessed.concat(name);
      console.log("catsGuessed after push:" + this.state.catsGuessed);
      this.setState({
        catsGuessed: catsGuessed,
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
      console.log("catsGuessed after setstate:" + this.state.catsGuessed);
    }
  };

  render() {
    return (
      <div>
        {console.log("catsguessed in render:" + this.state.catsGuessed)}
        <Header
          score={this.state.score}
          topscore={this.state.topscore}
          message={
            this.state.message ? this.state.message : "Click an image to begin!"
          }
        />
        <Jumbotron />
        <Wrapper>
          {this.shuffle(this.state.cats)}
          {this.state.cats.map(cat => {
            return (
              <Card
                userClicked={this.userClicked}
                key={cat.name}
                name={cat.name}
                src={cat.src}
              />
            );
          })}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
