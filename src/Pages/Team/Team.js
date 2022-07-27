import Animation from "../../Components/Animation/Animation";
import Background from "../../Components/Background/Background";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";

import { teamActions } from "../../store/team";
import "./Team.css";
import Direction from "./components/Direction/Direction";
import Mag from "./components/Mag/Mag";
import CI from "./components/CI/CI";
import RE from "./components/RE/RE";
import RC from "./components/RC/RC";
import RH from "./components/RH/RH";
import CF from "./components/CF/CF";
import Alumni from "./components/Alumni/Alumni";
import { useState } from "react";

const Team = () => {

  const [showDirection, setShowDirection] = useState(true);
  const [showMag, setShowMag] = useState(false);
  const [showCF, setShowCF] = useState(false);
  const [showCI, setShowCI] = useState(false);
  const [showRC, setShowRC] = useState(false);
  const [showRE, setShowRE] = useState(false);
  const [showRH, setShowRH] = useState(false);
  const [showAlumni, setShowAlumni] = useState(false);

  const directionHandler = () => {
    setShowDirection(true);
    setShowMag(false);
    setShowCF(false);
    setShowCI(false);
    setShowRC(false);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(false);
  };

  const magHandler = () => {
    setShowDirection(false);
    setShowMag(true);
    setShowCF(false);
    setShowCI(false);
    setShowRC(false);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(false);
  };

  const cfHandler = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(true);
    setShowCI(false);
    setShowRC(false);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(false);
  };

  const ciHandler = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(false);
    setShowCI(true);
    setShowRC(false);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(false);
  };

  const rcActive = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(false);
    setShowCI(false);
    setShowRC(true);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(false);
  }

  const reActive = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(false);
    setShowCI(false);
    setShowRC(false);
    setShowRE(true);
    setShowRH(false);
    setShowAlumni(false);
  }

  const rhActive = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(false);
    setShowCI(false);
    setShowRC(false);
    setShowRE(false);
    setShowRH(true);
    setShowAlumni(false);
  }

  const alumniActive = () => {
    setShowDirection(false);
    setShowMag(false);
    setShowCF(false);
    setShowCI(false);
    setShowRC(false);
    setShowRE(false);
    setShowRH(false);
    setShowAlumni(true);
  }

  return (
    <Animation>
    <Background
      class='background'
      title="Equipa"
      desc="A Scientific é constituída por estudantes de diferentes cursos, não só das áreas das ciências mas 
      também de outras áreas, da Universidade de Aveiro e encontra-se dividida por quatro Departamentos: Comunicação e 
      Imagem, Relações Científicas, Relações Empresariais e Recursos Humanos. Nesta página podes conhecer 
      quem atualmente faz parte da Scientific, bem como encontrar testemunhos de antigos membros."
    />
    <ListView>
        <div>
          <ListHeader className='team-list'
            class={showDirection ? "direction active" : "direction"}
            department="Direção"
            onClick={directionHandler}
          />
          <ListHeader
            class={showMag ? "mag active" : "mag"}
            department="Mag"
            onClick={magHandler}
          />
          <ListHeader
            class={showCF ? "fiscal active" : "fiscal"}
            department="Conselho Fiscal"
            onClick={cfHandler}
          />
          <ListHeader
            class={showCI ? "dep-ci active" : "dep-ci"}
            department="Dep. Comunicação e Imagem"
            onClick={ciHandler}
          />
          <ListHeader
            class={showRC ? "dep-rc active" : "dep-rc"}
            department="Dep. Relações Científicas"
            onClick={rcActive}
          />
          <ListHeader
            class={showRE ? "dep-re active" : "dep-re"}
            department="Dep. Relações Empresariais"
            onClick={reActive}
          />
          <ListHeader 
            class={showRH ? "dep-rh active" : "dep-rh"}
            department="Dep. Recursos Humanos" 
            onClick={rhActive}
          />
          <ListHeader 
            class={showAlumni ? "alumni active" : "alumni"}
            department="Testemunhos Alumni" 
            onClick={alumniActive}
          />
        </div>
        {showDirection && <Direction />}
        {showMag && <Mag />}
        {showCF && <CF />}
        {showCI && <CI />}
        {showRE && <RE />}
        {showRC && <RC />}
        {showRH && <RH />}
        {showAlumni && <Alumni />}
      </ListView>
      <Footer />
    </Animation>
  );
}

export default Team;
