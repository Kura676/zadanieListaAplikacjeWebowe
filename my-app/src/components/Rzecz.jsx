export default function Rzecz({ rzecz }) {
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
  
        <button className="skresl">❌</button>
      </li>
    );
  }