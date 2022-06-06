import "./Portfolio.css";
import {useState} from 'react';
import Background from "../../Components/Background/Background";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import Services from "./Components/Services";
import Initiatives from "./Components/Initiatives";

function Portfolio() {
  const [showServices, setShowServices] = useState(true);
  const [showInitiatives, setShowInitiatives] = useState(false);

  const showServicesHandler = () => {
    setShowInitiatives(false);
    setShowServices(true);
  }

  const showInitiativesHandler = () => {
    setShowServices(false);
    setShowInitiatives(true);
  }

  return (
    <>
      <Background
        class='background'
        title="Portfolio"
        desc=""
      />
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
      {showInitiatives && <Initiatives />}
      </ListView>
    </>
  );
}

export default Portfolio;
