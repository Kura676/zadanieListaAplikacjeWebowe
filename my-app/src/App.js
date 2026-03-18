import React from "react";
import { useState } from "react";
import rzeczy from "./data";
import Logo from "./components/Logo";
import Forma from "./components/Forma";
import Lista from "./components/Lista";
import Stopka from "./components/Stopka";

export default function App() {
  const [items, setItems] = useState(rzeczy);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToggleItem(id) {
  setItems(items =>
    items.map(item =>
      item.id === id
        ? { ...item, spakowane: !item.spakowane }
        : item
    )
  );
} 

function handleDeleteItem(id){

setItems((items)=>items.filter((item)=>item.id !=id));

}

  return (
    
    <div className="app">
      <Logo />
      <Forma  onHandleAddItems={handleAddItems} />
      <Lista items={items} onHandleDeleteItem={handleDeleteItem} onToggle={handleToggleItem}/>
      <Stopka />
    </div>
  );
}
