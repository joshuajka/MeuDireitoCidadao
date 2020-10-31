import React from "react";

import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Meu Direito Cidadão</h1>

      <nav>
        <ul>
          <li>
            <a href="https://google.com">Home</a>
          </li>

          <li>
            <a href="https://google.com">Advogado</a>
          </li>

          <li>
            <a href="https://google.com">Quem Somos</a>
          </li>

          <li>
            <a className="button" href="https://google.com">
              Entrar
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
