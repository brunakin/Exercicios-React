import React, { useState } from "react";

export function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num, setNum2] = useState(0);
  const [resposta, setResposta] = useState(0);

  const adicao = () => {
    setResposta(num1 + num2);
  };

  const subtracao = () => {
    setResposta(num1 - num2);
  };
  const multiplicacao = () => {
    setResposta(num1 * num2);
  };
  const divisao = () => {
    setResposta(num1 / num2);
  };
  const deletar = () => {
    setNum1(0);
    setNum2(0);
    setResposta(0);
  };

  return (
    <>
      <div>
        <h3>Calculadora Simples</h3>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div>
          <button onClick={adicao}>Adição</button>
          <button onClick={subtracao}>Subtração</button>
          <button onClick={multiplicacao}>Multiplicação</button>
          <button onClick={divisao}>Divisão</button>
          <button onClick={deletar}>Zerar Campos</button>
        </div>
        <h4>Resultado: {resposta}</h4>
      </div>
    </>
  );
}
