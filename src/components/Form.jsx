import React, { useState } from "react";

const Form = ({ newItemsAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitValue = (e) => {
    e.preventDefault()
    newItemsAdd('inputValue')
    setInputValue('')
  }
  return (
    <form onClick={submitValue}>
      <input value={inputValue} onChange={inputHandler} type="text" />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
