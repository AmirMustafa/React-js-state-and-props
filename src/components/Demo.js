import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Demo.css";

// Function based component
const Demo = ({ name }) => {
  // From destructuring
  return (
    <div className="main_divstyle">
      <h1>Hello {name}</h1>
      <p>Welcome to React world</p>
    </div>
  );
};
// Class based component
/* class Demo extends Component {
  render() {
    return (
      <div className="main_divstyle">
        <h1>Hello {this.props.name}</h1>
        <p>Welcome to React world</p>
      </div>
    );
  }
} */

export default Demo;
