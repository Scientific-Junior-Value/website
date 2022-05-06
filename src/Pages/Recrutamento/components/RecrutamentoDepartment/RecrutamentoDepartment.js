import './RecrutamentoDepartment.css';
import Footer from '../../../../Components/Footer/Footer'

import img from './camera.png';

function RecrutamentoDepartment(props) {
  return (
    <>
      <div className="department-wrapper">
        <div className="departments-name">
          <span className="dep-ci">Dep. Comunicação e Imagem</span>
          <span className="dep-rc">Dep. Relações Científicas</span>
          <span className="dep-re">Dep. Relações Empresariais</span>
          <span className="dep-rh">Dep. Recursos Humanos</span>
        </div>
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
      </div>
      <Footer />
    </>
  );
}

export default RecrutamentoDepartment;
