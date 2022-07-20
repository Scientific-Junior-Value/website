import "./Recrutamento.css";
import Background from "../../Components/Background/Background";
import RecrutamentoContent from "./components/RecrutamentoContent/RecrutamentoContent";
import DepartmentsQualities from "./components/DepartmentsQualities/DepartmentsQualities";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";
import { useState } from 'react';
import Animation from "../../Components/Animation/Animation";

const Recrutamento = () => {

  const [department, setDepartment] = useState('CI');
  const changeDepartment = (department) => setDepartment(department);

  return (
    <Animation>
      <Background class='background' title="Recrutamento" desc="" />
      <RecrutamentoContent />
      <ListView>
        <div>
          <ListHeader
            class="dep-ci"
            department="Dep. Comunicação e Imagem"
            departmentClicked={() => changeDepartment('CI')}
          />
          <ListHeader
            class="dep-rc"
            department="Dep. Relações Científicas"
            departmentClicked={() => changeDepartment('RC')}
          />
          <ListHeader
            class="dep-re"
            department="Dep. Relações Empresariais"
            departmentClicked={() => changeDepartment('RE')}
          />
          <ListHeader 
            class="dep-rh" 
            department="Dep. Recursos Humanos" 
            departmentClicked={() => changeDepartment('RH')}
          />
        </div>
        <DepartmentsQualities department={department} />
      </ListView>
      <Footer />
    </Animation>
  );
}

export default Recrutamento;
