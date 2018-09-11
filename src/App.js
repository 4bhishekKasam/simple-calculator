import React, { Component } from "react";
import Display from "./Component/Display";
import KeyPad from "./Component/KeyPad";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(buttonValue) {
  //  console.log(buttonValue);
    if (buttonValue === "=") {
      this.calculate();
    } else if (buttonValue === "C") {
      this.reset();
    } else if (buttonValue === "CE") {
      this.backspace();
    } else {
      this.setState({ result: this.state.result + buttonValue });
    }
  }

  calculate() {
    try {
      this.setState({ result: (eval(this.state.result) || "") + "" });
    } catch (e) {
      this.setState({ result: "error" });
    }
  }

  reset() {
    this.setState({ result: "" });
  }

  backspace() {
    this.setState({ result: this.state.result.slice(0, -1) });
  }

  render() {
    return (
      <div className="App-body">
        <h3>Calculator</h3>
        <Display result={this.state.result} />
        <KeyPad onClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
