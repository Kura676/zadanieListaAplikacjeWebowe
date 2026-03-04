export default function Rzecz({ rzecz, onToggle }) {
    return (
      <li>
        <span
          style={{
            textDecoration: rzecz.spakowane
              ? "line-through"
              : "none"
          }}
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