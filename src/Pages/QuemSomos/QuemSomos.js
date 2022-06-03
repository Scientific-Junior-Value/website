import "./QuemSomos.css";
import Background from "../../Components/Background/Background";
import QuemSomosContent from "./components/QuemSomosContent/QuemSomosContent";
import DarkFooter from "../../Components/Footer/DarkFooter/DarkFooter";
import Partnerships from "../../Components/Partnerships/Partnerships";

function Blog() {
  return (
    <>
      <Background
        class='background'
        title="Quem Somos"
        desc='"pretendemos promover o contacto entre os jovens
        e o tecido empresarial"'
      />
      <QuemSomosContent />
      <Partnerships />
      <DarkFooter />
    </>
  );
}

export default Blog;
