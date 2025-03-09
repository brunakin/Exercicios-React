import { useState } from "react";
import { Header } from "./Header"; // Ex 1
import { Footer } from "./Footer"; // Ex 1
import "./App.css";
import { Botao } from "./Botao"; // Ex 2
import { ArraySimples } from "./ListaSimples"; // Ex 3
import { ArrayObjetos } from "./ListaObjetos"; // Ex 4
import { ConteudoBotao } from "./ConteudoBotao"; // Ex 6
import { Contador } from "./Contador"; // Ex 7
import { Bola8 } from "./Bola8Magica"; // Ex 8
import { Calculadora } from "./Calculadora"; // Ex 9

function App() {
  //Exercício 5 - Aula 4 - Botão Claro e Escuro
  const [modoEscuro, setModoEscuro] = useState(false);
  const [mostrar, setValor] = useState(false);

  const trocarTema = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <>
      <div className="Exercicio1">
        <Header
          titulo="Header Exercício 1"
          subtitulo="Subtítulo do exercício 1"
        />
        <Footer texto="Texto recebido por props. Footer Exercício 1" />
      </div>

      <div className="Exercicio2">
        <Botao cor="pink" texto="Botão Rosa" />
        <Botao cor="blue" texto="Botão Azul" />
        <Botao cor="green" texto="Botão Verde" />
      </div>

      <div className="Exercicio3e4">
        <ArraySimples />
        <ArrayObjetos />
      </div>

      <div className={modoEscuro ? "modoEscuro" : "modoClaro"}>
        <button onClick={trocarTema}>Alterar Tema</button>
      </div>

      <div className="Exercicio6">
        <button onClick={() => setShow(!mostrar)}>Mostrar ou Ocultar</button>
        <Content mostrar={mostrar} />
      </div>

      <div className="Exercicio7">
        <Contador />
      </div>

      <div className="Exercicio8">
        <Bola8 />
      </div>

      <div className="Exercicio9">
        <Calculadora />
      </div>
    </>
  );
}

export default App;
