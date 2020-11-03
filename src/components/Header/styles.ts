import styled from "styled-components";

interface StyledHeaderProps {
  shownavbar: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  /* Estilos comuns a todos os elementos */
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: #233348;
  }

  button {
    border: 0;
    outline: 0;
    padding: 0.6rem;
    border-radius: 50%;
    color: #233348;
    background-color: transparent;
  }

  ul {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
      color: #1f1534;
      font-weight: bold;
      transition: 0.2s;
    }

    a:hover {
      color: rgba(0, 0, 0, 0.2);
    }

    a.button {
      background-color: black;
      color: white;
      padding: 0.6rem;
    }
  }

  /* Estilos para dispositivos de até 767px de width (sm do Bootstrap) */
  @media (max-width: 767px) {
    button {
      display: block;
    }

    nav {
      background-color: #d5d5d5;
      position: absolute;
      top: 0;
      right: -10;
      padding: 0.6rem;
      width: 100%;
      display: ${(props) => (props.shownavbar ? "flex" : "none")};
    }

    ul {
      display: block;

      li {
        margin: 1rem 0;
      }
    }
  }

  /* Estilos para dispositivos de no mínimo 768px de width (md do Bootstrap) */
  @media (min-width: 768px) {
    button {
      display: none;
    }

    nav {
      display: block;
    }

    ul {
      display: flex;
      align-items: center;
    }

    li {
      margin: 1rem;
    }
  }
`;
