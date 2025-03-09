import React, { useState } from "react";

export function ConteudoBotao({ mostrar }) {
  if (!mostrar) return null;
  return <p>Conteúdo do Botão</p>;
}
