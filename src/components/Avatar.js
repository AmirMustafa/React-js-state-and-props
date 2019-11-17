import React, { Component } from "react";
import "./Avatar.css";
import Avatarlist from "./Avatarlist";
import "tachyons";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to React World !"
    };
  }

  nameChange() {
    this.setState({
      name: "Welcome to React World from React State!"
    });
  }
  render() {
    const avatarlistarray = [
      {
        id: "1",
        name: "Amir Mustafa",
        works: "Web Developer"
      },
      {
        id: "2",
        name: "Tech Soft DK",
        works: "Python Developer"
      },
      {
        id: "3",
        name: "Priyanka Yadav",
        works: "JavaScript Developer"
      },
      {
        id: "4",
        name: "Atin Panday",
        works: "Frontend Developer"
      }
    ];

    // Getting data in loop - with the help of array map
    const avatardata = avatarlistarray.map((current, i) => {
      return (
        <Avatarlist
          key={i}
          id={current.id}
          name={current.name}
          works={current.works}
        />
      );
    });
    return (
      <div class="mainpage">
        <h1 class="tc">{this.state.name}</h1>
        {avatardata}
        {/* <Avatarlist id="1" name="Amir Mustafa" works="Web Developer" />
        <Avatarlist id="2" name="Techsoft DK" works="Full stack" />
        <Avatarlist id="3" name="Priyanka Yadav" works="JS Developer" />
        <Avatarlist id="4" name="Atin Panday" works="Frontend Developer" /> */}
        <button onClick={() => this.nameChange()}>Subscribe</button>
      </div>
    );
  }
}

export default Avatar;
