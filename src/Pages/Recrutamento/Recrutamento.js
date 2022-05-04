import "./Recrutamento.css";
import Background from "../../Components/Background/Background";

function Recrutamento() {
  return (
    <>
      <Background
        title="Recrutamento"
        desc=""
      />
      <div className="recrutamento-content">
        <ul>
          <li>
            <h3 className="recrutamento-header">Quanto te podes candidatar?</h3>
          </li>
          <li>
          <p>
            O nosso Recrutamento é bianual e ocorre uma vez por semestre. Portanto, se quiseres fazer parte
            desta incrível família,
            fica atento às nossas redes sociais e candidata-te na próxima oportunidade!
          </p>
          </li>
          <li>
            <h3 className="recrutamento-header">Como me posso destacar durante o Recrutamento?</h3>
          </li>
          <li>
            <div className="recrutamento-list-content">
              <p className="recrutamento-list-content-title">Na candidatura online:</p>
              <p className="recrutamento-list-content-text">
              <span className="initial-line"></span>
                Fala sobre a tua personalidade e explica-nos o porquê
                de seres o candidato ideal.
              </p>
            </div>
          </li>
          <li>
          <div className="recrutamento-list-content">
              <p className="recrutamento-list-content-title">Na entrevista:</p>
              <p className="recrutamento-list-content-text">
              <span className="initial-line"></span>
                Responde às perguntas de forma honesta;
                <br></br>
                <span className="initial-line"></span>
                Pensa cuidadosamente nas tuas respostas antes de responderes às questões;
                <br></br>
                <span className="initial-line"></span>
                Sê tu próprio e mostra-nos as tuas melhores qualidades e capacidades.
              </p>
            </div>  
          </li>
          <li>
            <div className="recrutamento-list-content">
              <p className="recrutamento-list-content-title">Nas dinâmicas:</p>
                <p className="recrutamento-list-content-text">
                <span className="initial-line"></span>
                Interage com os teus colegas e valoriza as suas capacidades e ideias.
                </p>
            </div>
          </li>
        </ul>
        <div className="recrutamento-header-final">
          <p>
            Se achas que um curso superior não é suficiente e queres <span className="bold-text">acrescentar valor aos teus conhecimentos</span>, 
            então tens a força de vontade que procuramos! Adicionalmente, se és dedicado nas atividades em que te envolves 
            e procuras um ambiente no qual te queiras <span className="bold-text">pôr à prova</span>, a Scientific é para ti.
            </p>
            <p>
            Aqui poderás também descobir com qual Departamento te identificas mais. Todavia, podes sempre tentar desafiar-te 
            e candidatar-te a um Departamento cujas <span className="bold-text">aptidões associadas gostarias de adquirir ou melhorar</span>. 
            </p>
        </div>
      </div>
    </>
  );
}

export default Recrutamento;
