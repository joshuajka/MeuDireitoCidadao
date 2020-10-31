import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  max-width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.main`
  /* Estilos comuns a todos os elementos */
  flex: 1;

  .persona-container,
  .info-container {
    display: flex;
    padding: 1.2rem;
  }

  .persona-container {
    align-items: center;
    justify-content: flex-end;
  }

  .info-container {
    flex: 1;
    flex-direction: column;

    h1,
    p {
      align-self: flex-start;
    }

    h1 {
      font-size: 3.25rem;
      line-height: 2.18rem;
      color: #000;
      line-height: 3.5rem;
    }

    p {
      font-size: 1.31rem;
      color: #7D7987;
      line-height: 2rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-top: 1.2rem;
    }

    .button {
      border-radius: 10px;
      text-decoration: none;
      font-weight: bold;
      padding: 0.6rem;
    }

    .button-black {
      margin: 0.6rem 0.6rem 0.6rem 0;

      color: white;
      background-color: black;
      border: 1px black solid;
      transition: 0.2s;
    }

    .button-outline {
      background-color: transparent;
      color: black;
      border: 1px black solid;
      transition: 0.2s;
    }
  }

  /* Estilos para dispositivos de até 767px de width (sm do Bootstrap) */
  @media (max-width: 767px) {
    display: flex;

    .persona-container {
      display: none;
    }

    .info-container {
      justify-content: start;
    }
  }

  /* Estilos para dispositivos de no mínimo 768px de width (md do Bootstrap) */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .info-container {
      justify-content: center;

      .button-black:hover {
        color: black;
        background-color: white;
      }

      .button-outline:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
