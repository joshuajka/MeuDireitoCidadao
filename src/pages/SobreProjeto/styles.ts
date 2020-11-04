import styled from "styled-components";

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
      color: #7d7987;
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
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 0.6rem;
      text-decoration: none;
      font-weight: bold;
      /* flex: 1; */
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
    flex-direction: column;

    .persona-container {
      justify-content: center;
      img {
        width: 200px;
        height: 300px;
      }
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
