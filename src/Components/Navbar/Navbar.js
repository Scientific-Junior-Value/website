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
              <li className='list-item dropdown'>
                Sobre Nós<span className='drop-line'></span>
                <ul className='dropdown-list'>
                    <li>Quem Somos</li>
                    <li>Equipa</li>
                </ul>
              </li>
              <li className='list-item dropdown'>Portfólio<span className='drop-line'></span>
                <ul className='dropdown-list'>
                      <li>Option 1</li>
                      <li>Option 2</li>
                </ul>
              </li>
              <li className='list-item'>Recrutamento</li>
              <li className='list-item'>Contactos</li>
              <li className='list-item'>Blog</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;