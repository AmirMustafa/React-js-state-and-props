import React from "react";
import "./Avatar.css";
import Avatarlist from "./Avatarlist";
import "tachyons";
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
    <Avatarlist id={current.id} name={current.name} works={current.works} />
  );
});
const Avatar = props => {
  return (
    <div class="mainpage">
      <h1 class="tc">Welcome to the Avatar World</h1>
      {avatardata}
      {/* <Avatarlist id="1" name="Amir Mustafa" works="Web Developer" />
      <Avatarlist id="2" name="Techsoft DK" works="Full stack" />
      <Avatarlist id="3" name="Priyanka Yadav" works="JS Developer" />
      <Avatarlist id="4" name="Atin Panday" works="Frontend Developer" /> */}
      <button>Subscribe</button>
    </div>
  );
};

export default Avatar;
