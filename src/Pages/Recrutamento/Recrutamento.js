import "./Recrutamento.css";
import Background from "../../Components/Background/Background";
import RecrutamentoContent from "./components/RecrutamentoContent/RecrutamentoContent";
import DepartmentsName from "./components/DepartmentsName/DepartmentsName";
import DepartmentsQualities from "./components/DepartmentsQualities/DepartmentsQualities";
import Footer from "../../Components/Footer/Footer";

function Recrutamento() {
  return (
    <>
      <Background title="Recrutamento" desc="" />
      <RecrutamentoContent />
      <div className="department-wrapper">
        <div>
          <DepartmentsName
            class="dep-ci"
            department="Dep. Comunicação e Imagem"
          />
          <DepartmentsName
            class="dep-rc"
            department="Dep. Relações Científicas"
          />
          <DepartmentsName
            class="dep-re"
            department="Dep. Relações Empresariais"
          />
          <DepartmentsName class="dep-rh" department="Dep. Recursos Humanos" />
        </div>
        <DepartmentsQualities />
      </div>
      <Footer />
    </>
  );
}

export default Recrutamento;
