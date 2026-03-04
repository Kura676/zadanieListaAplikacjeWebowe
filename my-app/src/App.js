import React from "react";

import Logo from "./components/Logo";
import Forma from "./components/Forma";
import Lista from "./components/Lista";
import Stopka from "./components/Stopka";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Forma />
      <Lista />
      <Stopka />
    </div>
  );
}
