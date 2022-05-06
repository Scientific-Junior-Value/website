import "./Recrutamento.css";
import Background from "../../Components/Background/Background";
import RecrutamentoContent from "./components/RecrutamentoContent/RecrutamentoContent";
import RecrutamentoDepartment from "./components/RecrutamentoDepartment/RecrutamentoDepartment";

function Recrutamento() {
  return (
    <>
      <Background
        title="Recrutamento"
        desc=""
      />
      <RecrutamentoContent />
      <RecrutamentoDepartment />
    </>
  );
}

export default Recrutamento;
