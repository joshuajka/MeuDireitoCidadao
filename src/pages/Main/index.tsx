import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Persona from "../../assets/images/persona.png";

import { Container, MainSection } from "./styles";

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
            Tire todas suas dúvidas e contrate um especialista para resolver o
            seu problema jurídico, <strong>tudo em um lugar só.</strong>
          </p>

          <div>
            <a className="button button-black" href="https://facebook.com">
              Tirar dúvidas
            </a>
            <a className="button button-outline" href="https://facebook.com">
              Contratar Especialista
            </a>
          </div>
        </div>
      </MainSection>
      
      <Footer />
    </Container>
  );
}

export default Main;
