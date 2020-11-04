import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Motivation from "../../assets/images/motivation.jpg"
import Impacto from "../../assets/images/impacto.jpg"
import Goal from "../../assets/images/goal.png"

import { MainSection } from "./styles";

function Main() {
   return (
      <Container>
         <Header />

         <MainSection>
            <div className="persona-container">
               <img src={Motivation} alt="Motivation" />
            </div>

            <div className="info-container">
               <p> A ideia surgiu a partir da investigação do porque muitos serviços são prestados de maneira lamentável no país e grande parte dos brasileiros considerarem isso como algo normal, pois já se acostumaram com esse padrão. Acreditamos que a falta de conhecimento dos direitos que um cidadão possui perante a legislação e como aplicá-los para ser ressarcido de eventuais danos e exigir melhorias nas prestações do serviço, é uma das causas desse conformismo de muitos brasileiros. Queremos que as pessoas exijam pelas melhorias cabíveis e nossa ideia é justamente incentivar isso levando o conhecimento em linguagem acessível e compreensível.
 </p>
            </div>

            <div className="persona-container">
               <img src={Impacto} alt="Persona" />
            </div>

            <div className="info-container">
               <p> Os direitos de um cidadão permitem-no exercer sua cidadania. Cidadãos que sabem seus direitos e deveres podem proporcionar grandes benefícios para o país, pois são pessoas capazes de prezar pela qualidade dos serviços jurídicos, que ajudam na fiscalização e na construção de um Brasil melhor, dentre outros benefícios.
               Nem todos os direitos básicos da carta magna brasileira são assegurados pelos gestores políticos. Deste modo, os cidadãos necessitam muitas vezes de aparato jurídico para obterem seus direitos. Entretanto, a falta de instrução e letramento muitas vezes dificulta ao cidadão exercer seus direitos.
               O impacto a curto prazo é a difusão do conhecimento dos direitos do cidadão para a população brasileira e que isso a médio e a longo prazo se reflita em melhorias para toda a sociedade, com melhores prestações de serviços por parte das empresas, garantias de uma qualidade de vida com segurança a fim de amenizar desigualdades sociais, além da plataforma servir de intermédio entre o cidadão que necessita dos serviços e um advogado especializado na área requerida.

 </p>
            </div>

            <div className="persona-container">
               <img src={Goal} alt="Persona" />
            </div>

            <div className="info-container">
               <p> O objetivo principal da plataforma é oferecer informações para todos aqueles que desejam conhecer seus direitos e reivindicá-los, independentemente de idade, classe social ou da região em que viva, e trazer os profissionais da área do direito para mais próximo da comunidade podendo se conectar a uma parcela da população até então pouco atingível ou inatingível.

</p>
            </div>


         </MainSection>

         <Footer />
      </Container>
   );
}

export default Main;
