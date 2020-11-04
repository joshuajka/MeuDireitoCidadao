import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import { StyledHeader } from "./styles";

export default function Header() {
  const [displayNavbar, setDisplayNavbar] = useState(false);

  function handleDisplayNavbar() {
    setDisplayNavbar(!displayNavbar);
  }

  return (
    <StyledHeader shownavbar={displayNavbar}>
      <h1>Meu Direito Cidadão</h1>

      <button onClick={() => handleDisplayNavbar()}>
        {displayNavbar ? <FiX /> : <FiMenu />}
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Quem somos</Link>
          </li>

          <li>
            <Link to="Sobre">Sobre o projeto</Link>
          </li>

          <li>
            <Link className="button" to="/">
              Entrar em contato
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
