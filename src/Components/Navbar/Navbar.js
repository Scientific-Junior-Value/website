import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
                    <li><Link to='/website/quem-somos' className='list-item-link dropdown-item' onClick={closeMobileMenu}>Quem Somos</Link></li>
                    <li><Link to='/website/equipa' className='list-item-link dropdown-item' onClick={closeMobileMenu}>Equipa</Link></li>
                </ul>
              </li>
              <li className='list-item dropdown'>Portfólio<span className='drop-line'></span>
                <ul className={dark ? 'dropdown-list' : 'dropdown-list-dark'}>
                      <li><Link to='/website/portfolio' className='list-item-link' onClick={closeMobileMenu}>Serviços</Link></li>
                      <li><Link to='/website/portfolio' className='list-item-link' onClick={closeMobileMenu}>Iniciativas</Link></li>
                      <li><Link to='/website/portfolio' className='list-item-link' onClick={closeMobileMenu}>Responsabilidades Sociais</Link></li>
                </ul>
              </li>
              <li className='list-item'>
              <Link to='/website/recrutamento' className='list-item-link' onClick={closeMobileMenu}>
                Recrutamento
              </Link>
              </li>
              <li className='list-item'>
              <Link to='/website/contactos' className='list-item-link' onClick={closeMobileMenu}>
                Contacts
              </Link>
              </li>
              <li className='list-item'>
              <Link to='/website/blog' className='list-item-link' onClick={closeMobileMenu}>
                Blog
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;