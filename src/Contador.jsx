import React, { useState } from "react";

export function Contador() {
  const [cont, setCont] = useState(0);

  const incrementar = () => {
    setCont(cont + 1);
  };

  const decrementar = () => {
    if (cont > 0) {
      setCont(cont - 1);
    }
  };

  return (
    <div>
      <h1>Contagem: {cont}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}
