import "./DepartmentsQualities.css";
import img from './camera.png';

function DepartmentsQualities() {
  return (
<div className="department-qualities">
          <p className="department-qualities-title">
            Um membro de CI deve ter:
          </p>
          <div className='department-qualities-title-items'>
            <p><span className="init-line"></span>Criatividade</p>
            <p>
                <span className="init-line"></span>
                Vontade para aprender o funcionamento de programas de edição de
                imagem e vídeo bem como de programação.
            </p>
          </div>
          <p className="department-qualities-functions">Funções</p>
          <div className='department-qualities-functions-items'>
            <p><span className="init-line"></span>Criar conteúdo de design gráfico para os eventos dinamizados pela Scientific;</p>
            <p><span className="init-line"></span>Tratar da manutenção das redes sociais;</p>
            <p><span className="init-line"></span>Criar material de divulgação da Scientific;</p>
            <p><span className="init-line"></span>Construir uma rede de contactos para assegurar a divulgação necessária.</p>
          </div>
          <div className='department-image'>
            <img src={img} alt='Department Img'></img>
          </div>
        </div>
  );
}

export default DepartmentsQualities;
