import React from "react";

const RandomRenderItem = ({ randomChooseItem, randomChooser }) => {
  return (
    <div>
      <hr />
      <button onClick={randomChooser}>random</button>
      <h1>{randomChooseItem.name}</h1>
    </div>
  );
};

export default RandomRenderItem;
