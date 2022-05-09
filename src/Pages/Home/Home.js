import Background from "../../Components/Background/Background";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="home-clean">
      <Background 
        class='background-no-margin'
        title="Quem Somos" 
        desc='"pretendemos promover o contacto entre os jovens
        e o tecido empresarial"' 
      />
    </div>
    </>
  );
}

export default Home;
