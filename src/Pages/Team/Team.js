import Background from "../../Components/Background/Background";
import Footer from "../../Components/Footer/Footer";
import ListHeader from "../../Components/ListView/ListHeader/ListHeader";
import ListImgItem from "../../Components/ListView/ListImgItem/ListImgItem";
import ListView from "../../Components/ListView/ListView";
import "./Team.css";

function Team() {
  return (
    <>
    <Background
      title="Equipa"
      desc="A Scientific é constituída por estudantes de diferentes cursos, não só das áreas das ciências mas 
      também de outras áreas, da Universidade de Aveiro e encontra-se dividida por quatro Departamentos: Comunicação e 
      Imagem, Relações Científicas, Relações Empresariais e Recursos Humanos. Nesta página podes conhecer 
      quem atualmente faz parte da Scientific, bem como encontrar testemunhos de antigos membros."
    />
    <ListView>
        <div>
          <ListHeader className='team-list'
            class="direction"
            department="Direção"
          />
          <ListHeader
            class="mag"
            department="Mag"
          />
          <ListHeader
            class="fiscal"
            department="Conselho Fiscal"
          />
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
          <ListHeader 
            class="alumni" 
            department="Testemunhos Alumni" 
          />
        </div>
        <div className="team-content-wrapper">
          <div className="team-content">
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
          </div>
          <div className="team-content">
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
          </div>
          <div className="team-content">
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
            <ListImgItem
              name='Lorem Ispum'
            />
          </div>
        </div>
      </ListView>
      <Footer />
    </>
  );
}

export default Team;
