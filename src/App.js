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
    topscore: 0
  };

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  userClicked = name => {
    console.log(name);
    if (this.state.catsGuessed.indexOf(name) > 0) {
      this.setState({ catsGuessed: [], score: 0 });
    } else {
      const catsGuessed = this.state.catsGuessed.push(name);
      console.log(this.state.catsGuessed);
      this.setState({ catsGuessed: catsGuessed, score: this.state.score + 1 });
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} topscore={this.state.topscore} />
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
