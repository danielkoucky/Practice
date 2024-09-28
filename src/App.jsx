import React, { useState } from "react";
import "./index.css";
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";
import MainComponent from "./MainComponent";

const initialitems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];

const App = () => {
  const [items, setitem] = useState(initialitems);
  let numberofitems = items.length;
  //making the function for submit btn
  console.log(numberofitems);
  function handleitems(item) {
    setitem(() => [...items, item]);
  }

  function f(id) {
    setitem(() => items.filter((items) => items.id !== id));
  }

  return (
    <div className="app">
      <Logo></Logo>
      <h1 className="bg-red-200">test</h1>
      <Form a={handleitems}></Form>
      <PackingList f={f} b={items}></PackingList>
      <Stats num={numberofitems}></Stats>
    </div>
  );
};

function Logo(params) {
  return <h1>Far away</h1>;
}

function Form({ a }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    a(newItem);
    console.log(newItem);
    setdescription("");
    setquantity("");
  }

  //for dropdown
  function dropdownhandler(e) {
    setquantity(Number(e.target.value));
  }

  //for input
  function inputhandler(e) {
    setdescription(e.target.value);
  }

  return (
    <form action="add-form" onSubmit={handlesubmit}>
      <div className="add-form">
        <select value={quantity} onChange={dropdownhandler}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
            <option value={num} key={index}>
              {num}
            </option>
          ))}
        </select>
        <input
          value={description}
          type="text"
          placeholder="Item..."
          onChange={inputhandler}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

function PackingList({ b, f }) {
  return (
    <div className="list">
      <ul className="list">
        {b.map((item, index) => (
          <Item f={f} item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, f }) {
  function muneeb() {
    f(item.id);
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={muneeb}>❌</button>
    </li>
  );
}
function Stats({ num }) {
  console.log("this is nums");
  return (
    <footer>
      <em>You have {num} items on you list , and you already packed X</em>
    </footer>
  );
}

export default App;
