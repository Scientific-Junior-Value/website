import "./QuemSomos.css";
import Background from "../../Components/Background/Background";
import QuemSomosContent from "./components/QuemSomosContent/QuemSomosContent";
import DarkFooter from "../../Components/Footer/DarkFooter/DarkFooter";
import Partnerships from "../../Components/Partnerships/Partnerships";
import Animation from "../../Components/Animation/Animation";

const Blog = () => {
  return (
    <Animation>
      <Background
        class='background'
        title="Quem Somos"
        desc='"pretendemos promover o contacto entre os jovens
        e o tecido empresarial"'
      />
      <QuemSomosContent />
      <Partnerships />
      <DarkFooter />
    </Animation>
  );
}

export default Blog;
