import React, { useState } from "react";

export function Bola8() {
  const respostas = ["Sim", "Não", "Talvez", "Depende"];
  const [resposta, setResposta] = useState("");

  return (
    <>
      <div>
        <button
          onClick={() =>
            setResposta(respostas[Math.floor(Math.random() * respostas.length)])
          }
        >
          Pergunte à Bola 8
        </button>
        {resposta && <p>{resposta}</p>}
      </div>
    </>
  );
}
