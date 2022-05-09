import "./Recrutamento.css";
import Background from "../../Components/Background/Background";
import RecrutamentoContent from "./components/RecrutamentoContent/RecrutamentoContent";
import DepartmentsQualities from "./components/DepartmentsQualities/DepartmentsQualities";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListView from "../../Components/ListView/ListView";

function Recrutamento() {
  return (
    <>
      <Background title="Recrutamento" desc="" />
      <RecrutamentoContent />
      <ListView>
        <div>
          <ListHeader
            class="dep-ci"
            department="Dep. Comunicação e Imagem"
          />
          <ListHeader
            class="dep-rc"
            department="Dep. Relações Científicas"
          />
          <ListHeader
            class="dep-re"
            department="Dep. Relações Empresariais"
          />
          <ListHeader 
            class="dep-rh" 
            department="Dep. Recursos Humanos" 
          />
        </div>
        <DepartmentsQualities />
      </ListView>
      <Footer />
    </>
  );
}

export default Recrutamento;
