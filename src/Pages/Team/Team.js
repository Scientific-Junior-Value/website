import Animation from "../../Components/Animation/Animation";
import Background from "../../Components/Background/Background";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import { useSelector, useDispatch } from 'react-redux';

import { teamActions } from "../../store/team";
import "./Team.css";
import Direction from "./components/Direction/Direction";
import Mag from "./components/Mag/Mag";
import CI from "./components/CI/CI";
import RE from "./components/RE/RE";
import RC from "./components/RC/RC";
import RH from "./components/RH/RH";
import CF from "./components/CF/CF";

const Team = () => {

  const dispatch = useDispatch();

  const showDirection = useSelector((state) => state.team.directionActive);
  const showMag = useSelector((state) => state.team.magActive);
  const showCF = useSelector((state) => state.team.cfActive);
  const showCI = useSelector((state) => state.team.ciActive);
  const showRC = useSelector((state) => state.team.rcActive);
  const showRE = useSelector((state) => state.team.reActive);
  const showRH = useSelector((state) => state.team.rhActive);
  const showAlumni = useSelector((state) => state.team.alumniActive);

  const directionHandler = () => {
    dispatch(teamActions.setDirectionActive());
  };

  const magHandler = () => {
    dispatch(teamActions.setMagActive());
  };

  const cfHandler = () => {
    dispatch(teamActions.setCFActive());
  };

  const ciHandler = () => {
    dispatch(teamActions.setCIActive());
  };

  const rcActive = () => {
    dispatch(teamActions.setRCActive());
  }

  const reActive = () => {
    dispatch(teamActions.setREActive());
  }

  const rhActive = () => {
    dispatch(teamActions.setRHActive());
  }

  const alumniActive = () => {
    dispatch(teamActions.setAlumniActive());
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
        {showAlumni && <p>Alumni</p>}
      </ListView>
      <Footer />
    </Animation>
  );
}

export default Team;
