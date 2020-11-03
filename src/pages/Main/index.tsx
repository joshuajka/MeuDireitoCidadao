import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

import Persona from "../../assets/images/persona.png";

import { MainSection } from "./styles";

function Main() {
  return (
    <Container>
      <Header />

      <MainSection>
        <div className="persona-container">
          <img src={Persona} alt="Persona" />
        </div>

        <div className="info-container">
          <h1>
            Dúvidas sobre <br /> seus Direitos?
          </h1>

          <p>
            Clique no botão abaixo para conhecer tudo que o Código
            do direito do consumidor <strong>garante à você.</strong>
          </p>

          <div>
            <Link className="button button-black" to="/">
              Meus Direitos
            </Link>
            {/* <Link className="button button-outline" to="/">
              Contratar Especialista
            </Link> */}
          </div>
        </div>
      </MainSection>

      <Footer />
    </Container>
  );
}

export default Main;
