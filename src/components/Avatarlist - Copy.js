import React from "react";
const Avatarlist = props => {
  return (
    <div className="avatarstyle ma4 bg-light-purple dib pa2 grow shadow-4">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
      <h1 class="tc">{props.name}</h1>
      <p class="tc">{props.works}</p>
    </div>
  );
};

export default Avatarlist;
