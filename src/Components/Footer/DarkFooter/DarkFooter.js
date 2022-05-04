import './DarkFooter.css';
import logo from './logo.png';

function DarkFooter() {
    return (
        <div className='dark-footer'>  
            <div className='dark-footer-wrapper'>
                <div className='footer-logo-wrapper'>
                    <img src={logo} alt='Scientific Logo'></img>
                </div>
                <div className='contacts-list'>
                    <span className='contacts-list-title'>Contactos</span>
                    <span>geral@scientific.pt</span>
                    <span>scientificjuniorvalue@gmail.com</span>
                </div>
                <div className='social-icons'>
                        <p>Faltam os icons </p>
                </div>
            </div>
            <div className='dark-footer-copy-wrapper'>
                <p className='dark-footer-copy'>&copy; 2022 Scientific Junior Value</p>
            </div>
        </div>
    );
}

export default DarkFooter;