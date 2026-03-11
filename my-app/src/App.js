import React from "react";
import { useState } from "react";

import Logo from "./components/Logo";
import Forma from "./components/Forma";
import Lista from "./components/Lista";
import Stopka from "./components/Stopka";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }``

  return (
    
    <div className="app">
      <Logo />
      <Forma  onHandleAddItems={handleAddItems} />
      <Lista items={items}/>
      <Stopka />
    </div>
  );
}
