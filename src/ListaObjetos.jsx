import React from "react";

export function ArrayObjetos() {
  const pessoas = [
    { nome: "Bruna", idade: "19", genero: "feminino" },
    { nome: "Denise", idade: "25", genero: "feminino" },
    { nome: "Murilo", idade: "13", genero: "maasculino" },
  ];

  return (
    <ul>
      {pessoas.map((pessoa) => (
        <li key={index}>
          {pessoa.nome} - {pessoa.idade} - {pessoa.genero}
        </li>
      ))}
    </ul>
  );
}
