import "./Portfolio.css";
import { useState } from "react";
import Background from "../../Components/Background/Background";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import Services from "./Components/Services";
import Initiatives from "./Components/Initiatives";
import InitiativesItem from "./Components/InitiativesItem";
import Footer from '../../Components/Footer/Footer';
import Animation from "../../Components/Animation/Animation";
import { useSelector, useDispatch } from 'react-redux';

import { portfolioActions } from "../../store/portfolio";

const Portfolio = () => {
  const dispatch = useDispatch();

  const portfolioServices = useSelector((state) => state.portfolio.servicesActive);
  const portfolioInitiatives = useSelector((state) => state.portfolio.initiativesActive);
  const portfolioResponsabilities = useSelector((state) => state.portfolio.responsabilitiesActive)

  const servicesHandler = () => {
    dispatch(portfolioActions.setServicesActive());
  };

  const initiativesHandler = () => {
    dispatch(portfolioActions.setInitiatiativesActive());
  };

  const responsabilitiesHandler = () => {
    dispatch(portfolioActions.setResponsabilitiesActive());
  };

  return (
    <Animation>
      <Background class="background" title="Portfolio" desc="" />
      <ListView>
        <div>
          <ListHeader
            class={portfolioServices ? "portfolio-header-item active" : "portfolio-header-item"}
            department="Serviços"
            onClick={servicesHandler}
          />
          <ListHeader
            class={portfolioInitiatives ? "portfolio-header-item active" : "portfolio-header-item"}
            department="Iniciativas"
            onClick={initiativesHandler}
          />
          <ListHeader
            class={portfolioResponsabilities ? "portfolio-header-item active" : "portfolio-header-item"}
            department="Responsabilidades Sociais"
            onClick={responsabilitiesHandler}
          />
        </div>
        {portfolioServices && <Services />}
        {portfolioInitiatives && (
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
        {portfolioResponsabilities && <p>Responsabilities</p>}
      </ListView>
      <Footer />
    </Animation>
  );
}

export default Portfolio;
