import "./Recrutamento.css";
import Background from "../../Components/Background/Background";
import RecrutamentoContent from "./components/RecrutamentoContent/RecrutamentoContent";
import DepartmentsQualities from "./components/DepartmentsQualities/DepartmentsQualities";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import { useState } from 'react';
import Animation from "../../Components/Animation/Animation";
import { useSelector, useDispatch } from 'react-redux';
import { recruitmentActions } from "../../store/recrutamento";

const Recrutamento = () => {

  const dispatch = useDispatch();

  const showRE = useSelector((state) => state.recruitment.reActive);
  const showCI = useSelector((state) => state.recruitment.ciActive);
  const showRC = useSelector((state) => state.recruitment.rcActive);
  const showRH = useSelector((state) => state.recruitment.rhActive);

  const reHandler = () => {
    dispatch(recruitmentActions.setREActive());
  };

  const ciHandler = () => {
    dispatch(recruitmentActions.setCIActive());
  };

  const rcHandler = () => {
    dispatch(recruitmentActions.setRCActive());
  };

  const rhHandler = () => {
    dispatch(recruitmentActions.setRHActive());
  };

  const [department, setDepartment] = useState('CI');
  const changeDepartment = (department) => setDepartment(department);

  return (
    <Animation>
      <Background class='background' title="Recrutamento" desc="" />
      <RecrutamentoContent />
      <ListView>
        <div>
          <ListHeader
            class={showCI ? "dep-ci active" : "dep-ci"}
            department="Dep. Comunicação e Imagem"
            departmentClicked={() => changeDepartment('CI')}
            onClick={ciHandler}
          />
          <ListHeader
            class={showRC ? "dep-rc active" : "dep-rc"}
            department="Dep. Relações Científicas"
            departmentClicked={() => changeDepartment('RC')}
            onClick={rcHandler}
          />
          <ListHeader
            class={showRE ? "dep-re active" : "dep-re"}
            department="Dep. Relações Empresariais"
            departmentClicked={() => changeDepartment('RE')}
            onClick={reHandler}
          />
          <ListHeader 
            class={showRH ? "dep-rh active" : "dep-rh"}
            department="Dep. Recursos Humanos" 
            departmentClicked={() => changeDepartment('RH')}
            onClick={rhHandler}
          />
        </div>
        <DepartmentsQualities department={department} />
      </ListView>
      <Footer />
    </Animation>
  );
}

export default Recrutamento;
