import "./QuemSomosContent.css";
import img from './yellow.png';

function QuemSomos() {
  return (
    <>
    <div className="quem-somos-item-1">
        <div className="img-quem-somos-wrapper">
          <img alt="" src={img}></img>
        </div>
        <div className="quem-somos-item-1-text">
          <p>Criada por um grupo de jovens universitários dinâmicos e empreendedores em 2016, a Scientific Junior Value é 
            uma Júnior Iniciativa da Universidade de Aveiro que se insere no Movimento Júnior Empresarial Português 
            (integrante da JE Europa).
          </p>
          <p>
          Constituída atualmente por mais de 50 estudantes de diversas áreas de estudo, na Scientific pretendemos 
          promover o contacto entre os jovens e o tecido empresarial, através da realização de 
            eventos onde poderão ser construídas relações frutíferas entre todas as partes envolvidas.
          </p>
        </div>
    </div>
    <div className="quem-somos-item-2">
        <div className="img-quem-somos-wrapper-2-mobile">
          <img alt="" src={img}></img>
        </div>
        <div className="quem-somos-item-2-text">
          <p>
          Orgulhamo-nos de ter por base valores como o dinamismo, a confiança, a filosofia Lean e a satisfação do cliente. 
          A nossa visão para o futuro é transformar a Scientific numa Júnior Empresa na vanguarda da qualidade, 
          inovação e empreendedorismo, sendo estas características a base dos serviços prestados.
          </p>
        </div>
        <div className="img-quem-somos-wrapper-2">
          <img alt="" src={img}></img>
        </div>
    </div>
    <div className="quem-somos-item-3">
        <div className="img-quem-somos-wrapper">
          <img alt="" src={img}></img>
        </div>
        <div className="quem-somos-item-3-text">
          <p>Os nossos serviços prestados assentam na organização de eventos e workshops de índole científica para a 
            comunidade académica e público em geral que se podem concretizar tanto fisicamente, como online. 
            Na página Serviços podes encontrar mais informações, bem como o nosso portfólio de serviços.
          </p>
        </div>
    </div>
    </>
  );
}

export default QuemSomos;
