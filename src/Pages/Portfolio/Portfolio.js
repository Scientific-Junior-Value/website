import "./Portfolio.css";
import { useState } from "react";
import Background from "../../Components/Background/Background";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import Services from "./Components/Services";
import Initiatives from "./Components/Initiatives";
import InitiativesItem from "./Components/InitiativesItem";
import Footer from '../../Components/Footer/Footer';

function Portfolio() {
  const [showServices, setShowServices] = useState(true);
  const [showInitiatives, setShowInitiatives] = useState(false);

  const showServicesHandler = () => {
    setShowInitiatives(false);
    setShowServices(true);
  };

  const showInitiativesHandler = () => {
    setShowServices(false);
    setShowInitiatives(true);
  };

  return (
    <>
      <Background class="background" title="Portfolio" desc="" />
      <ListView>
        <div>
          <ListHeader
            class="portfolio-header-item"
            department="Serviços"
            onClick={showServicesHandler}
          />
          <ListHeader
            class="portfolio-header-item"
            department="Iniciativas"
            onClick={showInitiativesHandler}
          />
          <ListHeader
            class="portfolio-header-item"
            department="Responsabilidades Sociais"
          />
        </div>
        {showServices && <Services />}
        {showInitiatives && (
          <Initiatives>
            <InitiativesItem
              image="events/brainload.png"
              video="events/videos/brainload.mp4"
              text="Com quatro edições de sucesso, o Brainload procura dar a conhecer à comunidade
              estudantil e aos docentes da Universidade de Aveiro o trabalho científico desenvolvido
              por equipas de alguns dos principais centros de investigação em Portugal."
            />
            <InitiativesItem
              image="events/scale-up.png"
              video="events/videos/scale-up.mp4"
              text="O Scale-Up dá-nos a possibilidade de construirmos o nosso futuro, testando as nossas
              capacidades e desenvolvendo as nossas soft skills, através de palestras dinâmicas dadas
              pelos melhores na sua área."
            />
            <InitiativesItem
              image="events/inteligencia.png"
              imageClass="big-image"
              video="events/videos/scale-up.mp4"
              text="Neste workshop organizado pela Scientific para uma entidade externa, Célia Azevedo,
              os participantes aprenderam várias estratégias que lhes permitem um melhor controlo
              sobre as emoções, como a ansiedade e o stress. Além disso, desenvolveram a sua
              capacidade de comunicação."
            />
          </Initiatives>
        )}
      </ListView>
      <Footer />
    </>
  );
}

export default Portfolio;
