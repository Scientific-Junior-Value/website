import { useState } from 'react';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <img src={logo} alt='Scientific Logo'/>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='navbar-links'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='dropdown'>Sobre Nós<span className='drop-line'></span></li>
              <li className='dropdown'>Portfólio<span className='drop-line'></span></li>
              <li>Recrutamento</li>
              <li>Contactos</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;