import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Meu Direito Cidadão</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Advogado</Link>
          </li>

          <li>
            <Link to="/">Sobre</Link>
          </li>

          <li>
            <Link className="button" to="/">
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
