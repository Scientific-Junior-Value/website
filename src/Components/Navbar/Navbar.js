import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [dark, setDark] = useState(true);
  // On scrool, make bg black
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
        // Get scroll position
        if (window.pageYOffset > 30) {
            setDark(false);
        } else {
            setDark(true);
        }
    });
}, []);

  return (
    <>
      <nav className={dark ? 'navbar': 'navbar-dark'}>
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
                <ul className={dark ? 'dropdown-list' : 'dropdown-list-dark'}>
                    <li>Quem Somos</li>
                    <li>Equipa</li>
                </ul>
              </li>
              <li className='list-item dropdown'>Portfólio<span className='drop-line'></span>
                <ul className={dark ? 'dropdown-list' : 'dropdown-list-dark'}>
                      <li>Option 1</li>
                      <li>Option 2</li>
                </ul>
              </li>
              <Link to='/recrutamento' className='list-item'>
                Recrutamento
              </Link>
              <Link to='/contactos' className='list-item'>
                Contacts
              </Link>
              <Link to='/blog' className='list-item'>
                Blog
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;