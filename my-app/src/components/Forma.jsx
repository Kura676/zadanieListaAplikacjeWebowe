import React from "react";
import { useState } from "react";
// import zawsze na samej górze

export default function Forma({onHandleAddItems}) { 
  const [opis, setOpis] = useState("");
  const [ilosc, setIlosc] = useState(1);

  

  function handleSubmit(e) {
    e.preventDefault();
    if (!opis) return;

    const nowaRzecz = {
      opis,
      ilosc,
      spakowane: false,
      id: Date.now(),
    };

    console.log(nowaRzecz);
    onHandleAddItems  (nowaRzecz);

    setOpis("");
    setIlosc(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Co dziś potrzebujesz do szkoły?</h3>

      <select
        value={ilosc}
        onChange={(e) => setIlosc(Number(e.target.value))}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="rzecz..."
        value={opis}
        onChange={(e) => setOpis(e.target.value)}
      />

      <button>dodaj</button>
    </form>
  );
}