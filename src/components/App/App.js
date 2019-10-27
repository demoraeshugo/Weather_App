import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Header></Header>
          <Body></Body>
        </div>
      </div>
    );
  }
}
export default App;
