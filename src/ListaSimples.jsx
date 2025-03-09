import React from "react";

export function ArraySimples() {
  const nomes = ["Bruna", "Anderson", "Denise"];

  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}
