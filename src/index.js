import React, { Component } from "react";
import ReactDOM from "react-dom";
import Register from "./Register";

import "./styles.css";

class App extends Component {
  state = {
    LoginOnTop: true
  };

  clicked = () => {
    this.setState(prevState => ({ LoginOnTop: !prevState.LoginOnTop }));
  };
  render() {
    return (
      <div className="App">

        <Register />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
