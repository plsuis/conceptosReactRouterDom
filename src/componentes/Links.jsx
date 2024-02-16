import * as React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <h1>Rutas</h1>
      <Link to="/ruta0">Ruta 0</Link>
      <Link to="/componenteruta">Componente Ruta</Link>
    </div>
  );
}