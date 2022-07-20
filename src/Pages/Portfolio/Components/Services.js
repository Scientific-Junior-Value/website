import "./Services.css";
import file from './assets/PortfólioDeServiços.pdf';

const Services = () => {
  return (
    <div className="services">
      <p className="services-header">
        A Scientific Junior Value presta serviços na organização de eventos de
        índole científica destinados à comunidade académica e ao público em
        geral. Os eventos podem ocorrer tanto presencialmente como online.{" "}
        <br></br>Os nossos serviços incluem:
      </p>
      <ul className="services-list">
        <li>
          <span className="services-init-line"></span>Angariação de patrocínios,
          financiamento e entidades parceiras;
        </li>
        <li>
          <span className="services-init-line"></span>Obtenção do espaço físico;
        </li>
        <li>
          <span className="services-init-line"></span>Realização da imagem
          associada;
        </li>
        <li>
          <span className="services-init-line"></span>Realização da comunicação
          física e digital;
        </li>
        <li>
          <span className="services-init-line"></span>Elaboração de documentação
          de apoio ao evento: contactos com entidades externas;
        </li>
        <li>
          <span className="services-init-line"></span>Regulamentos, e-mails e
          Contratos;
        </li>
        <li>
          <span className="services-init-line"></span>Gestão de participantes:
          inscrições, follow up e feedback;
        </li>
        <li>
          <span className="services-init-line"></span>Realização do pricing.
        </li>
      </ul>
      <p className="services-link">O nosso portfólio de serviços pode ser consultado <a href={file} target="_blank"  rel="noreferrer">aqui</a>.</p>
    </div>
  );
};

export default Services;
