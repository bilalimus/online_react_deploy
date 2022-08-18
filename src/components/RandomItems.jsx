import React from "react";

const RandomItems = ({ name, id }) => {
  return (
    <>
    <hr />
    <div id={id}>{name}</div>
    </>
  )
};

export default RandomItems;
