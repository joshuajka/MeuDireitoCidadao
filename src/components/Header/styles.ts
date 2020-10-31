import styled from "styled-components";

export const StyledHeader = styled.header`
  /* Estilos comuns a todos os elementos */
  padding: 1.2rem;

  h1 {
    font-size: 1.87rem;
  }

  ul {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
      color: rgba(0, 0, 0, 0.4);
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
    ul {
      display: block;

      li {
        margin: 1rem 0;
      }
    }
  }

  /* Estilos para dispositivos de no mínimo 768px de width (md do Bootstrap) */
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      margin: 1rem;
    }
  }
`;
