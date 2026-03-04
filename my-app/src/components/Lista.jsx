import rzeczy from "../data";
import Rzecz from "./Rzecz";

export default function Lista() {
  return (
    <ul className="list">
      <h5>Lista</h5>
      {rzeczy.map((rzeczDoWybrania) => (
        <Rzecz
          rzecz={rzeczDoWybrania}
          key={rzeczDoWybrania.id}
        />
      ))}
    </ul>
  );
}
