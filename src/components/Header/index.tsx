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
            <Link to="/">Advogado</Link>
          </li>

          <li>
            <Link to="/sobre">Sobre</Link>
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
