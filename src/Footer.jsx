import React from "react";
import "./App.css";

export function Footer(props) {
  const data = new Date();
  return (
    <>
      <footer className="footer">
        <h1>{props.texto}</h1>
        <h1>{data}</h1>
      </footer>
    </>
  );
}
