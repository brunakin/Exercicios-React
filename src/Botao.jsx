import React from "react";

export function Botao(props) {
  return <button style={{ backgroundColor: props.cor }}>{props.texto}</button>;
}
