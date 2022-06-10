import Animation from "../../Components/Animation/Animation";
import Background from "../../Components/Background/Background";
import "./Home.css";

function Home() {
  return (
    <Animation>
    <div className="home-clean">
      <Background 
        class='background-no-margin'
        title="Quem Somos" 
        desc='"pretendemos promover o contacto entre os jovens
        e o tecido empresarial"' 
      />
    </div>
    </Animation>
  );
}

export default Home;
