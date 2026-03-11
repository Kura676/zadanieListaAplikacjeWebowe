import React from "react";
import { useState } from "react";
//import zawsze na samej górze
export default function Forma() {
  const [opis, setOpis]= useState("")
  const [numer, setNumer] = useState("")
  function handleSubmit(e){

    e.preventDefault();
    const nowaRzecz = {opis, numer,spakowane: false, id: Date.now()};
    console.log(nowaRzecz)

  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Co dziś potrzebujesz do szkoły?</h3>

      <select 
       value={numer}
        onChange={(e) => setNumer(Number(e.target.value))}>
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
       
      </select>
        <input type="text" placeholder="rzecz..." value={opis}//aktualna wartosc to opis
        onChange={(e) => setOpis(e.target.value)}/>
      <button>dodaj</button>
    </form>
  );
}

