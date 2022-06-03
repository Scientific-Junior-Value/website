import "./DarkFooter.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function DarkFooter() {

    const handleClick = (link) => {
        window.open(link);
      };

  return (
    <div className="dark-footer">
      <div className="dark-footer-wrapper">
        <div className="footer-logo-wrapper">
          <img src={logo} alt="Scientific Logo"></img>
        </div>
        <div className="contacts-list">
          <span className="contacts-list-title">Contactos</span>
          <span>geral@scientific.pt</span>
          <span>scientificjuniorvalue@gmail.com</span>
        </div>
        <div className="social-icons">
          <span>
            <a className="social-icons-link" href="https://www.facebook.com/ScientificJuniorValue/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          </span>
          <span>
            <a className="social-icons-link" href="https://www.instagram.com/scientificjuniorvalue/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /> </a>
          </span>
          <span>
            <a className="social-icons-link" href="https://www.linkedin.com/in/scientificjuniorvalue" target="_blank"><FontAwesomeIcon  icon={faLinkedin} /> </a>
          </span>
        </div>
      </div>
      <div className="dark-footer-copy-wrapper">
        <p className="dark-footer-copy">&copy; 2022 Scientific Junior Value</p>
      </div>
    </div>
  );
}

export default DarkFooter;
