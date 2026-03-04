import React from "react";

function Forma() {
  return (
    <form className="add-form">
      <h3>Co dziś potrzebujesz do szkoły?</h3>

      <select>
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <button>dodaj</button>
    </form>
  );
}

export default Forma;