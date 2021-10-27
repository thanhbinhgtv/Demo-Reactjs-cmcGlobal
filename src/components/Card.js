import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>Card</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;