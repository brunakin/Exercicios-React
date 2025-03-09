import React from "react";
import "./App.css";

export function Header(props) {
  return (
    <>
      <header className="header">
        <h1>{props.titulo}</h1>
        <h1>{props.subtitulo}</h1>
      </header>
    </>
  );
}
