import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import RandomItems from "./components/RandomItems";
import RandomRenderItem from "./components/RandomRenderItem";

function App() {
  const [items, setItems] = useState([]);
  const [randomChooseItem, setRandomChooseItem] = useState({});
  console.log(items, 'items');

  const newItemsAdd = (item) => {
    setItems([...items, { id: Math.random(), name: item }]);
  };
  function getRandomInt() {
    let randomNumber = Math.floor(Math.random() * (items.length - 2));
    return randomNumber
  }

  const randomChooser = () => {
    let randomItem = items[getRandomInt()]
    setRandomChooseItem(randomItem);
  };
  return (
    <div className="App">
      <h1>My Random App</h1>
      <Form newItemsAdd={newItemsAdd} />
      {items.map((el) => {
        return <RandomItems name={el.name} id={el.id} key={el.id} />;
      })}
      <RandomRenderItem
        randomChooseItem={randomChooseItem}
        randomChooser={randomChooser}
      />
    </div>
  );
}

export default App;
