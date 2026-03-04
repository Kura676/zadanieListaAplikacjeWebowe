import React from "react";

export default function Forma() {
  function handleSubmit(e){

    e.preventDefault();

  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Co dziś potrzebujesz do szkoły?</h3>

      <select>
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
        <input type="text" placeholder="rzecz..." />
      <button>dodaj</button>
    </form>
  );
}

