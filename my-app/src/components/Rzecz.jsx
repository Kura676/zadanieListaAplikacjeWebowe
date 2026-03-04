export default function Rzecz({ rzecz, onToggle }) {
  return (
    <li>
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
        onClick={() => onToggle(rzecz.id)}
      >
        ❌
      </button>
    </li>
  );
}