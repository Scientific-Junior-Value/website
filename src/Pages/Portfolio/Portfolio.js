import "./Portfolio.css";
import { useState } from "react";
import Background from "../../Components/Background/Background";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import Services from "./Components/Services";
import Initiatives from "./Components/Initiatives";
import InitiativesItem from "./Components/InitiativesItem";

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
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem."
            />
            <InitiativesItem
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem."
            />
          </Initiatives>
        )}
      </ListView>
    </>
  );
}

export default Portfolio;
