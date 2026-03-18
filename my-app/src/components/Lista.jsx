import { useState } from "react";
import rzeczyData from "../data";
import Rzecz from "./Rzecz";

export default function Lista({items, onToggle}) {

  

  return (
    <ul className="list">
      <h5>Lista</h5>
      {items.map((rzeczDoWybrania) => (
  <Rzecz
    rzecz={rzeczDoWybrania}
    key={rzeczDoWybrania.id}
    onToggle={onToggle}
  />
))} 
    </ul>
  );
}