import "./Portfolio.css";
import Background from "../../Components/Background/Background";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import Services from "./Components/Services";

function Portfolio() {
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
        />
        <ListHeader
              class="portfolio-header-item"
              department="Iniciativas"
        />
        <ListHeader
              class="portfolio-header-item"
              department="Responsabilidades Sociais"
        />
      </div>
      <Services />
      </ListView>
    </>
  );
}

export default Portfolio;
