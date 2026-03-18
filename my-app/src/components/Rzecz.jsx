export default function Rzecz({ rzecz, onToggle,onHandleDeleteItem }) {
  return (
    <li>
      <input
  type="checkbox"
  checked={rzecz.spakowane}
  onChange={() => onToggle(rzecz.id)}
/>

      <span
        style={
          rzecz.spakowane
            ? { textDecoration: "line-through" }
            : {}
        }
      >
        {rzecz.opis} {rzecz.ilosc}
      </span>

      <button
        className="skresl"
        onClick={() => onHandleDeleteItem (rzecz.id)}
      >
        ❌
      </button>
    </li>
  );
}