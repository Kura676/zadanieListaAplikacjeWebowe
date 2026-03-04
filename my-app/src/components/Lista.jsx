import { useState } from "react";
import rzeczyData from "../data";
import Rzecz from "./Rzecz";

export default function Lista() {
  const [rzeczy, setRzeczy] = useState(rzeczyData);

  function toggleSpakowane(id) {
    setRzeczy(
      rzeczy.map(r =>
        r.id === id
          ? { ...r, spakowane: !r.spakowane }
          : r
      )
    );
  }

  return (
    <ul className="list">
      <h5>Lista</h5>
      {rzeczy.map((rzeczDoWybrania) => (
        <Rzecz
          rzecz={rzeczDoWybrania}
          key={rzeczDoWybrania.id}
          onToggle={toggleSpakowane}
        />
      ))}
    </ul>
  );
}