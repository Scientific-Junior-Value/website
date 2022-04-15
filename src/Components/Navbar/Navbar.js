import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} alt='Scientific Logo' />
        </div>
        <div className='navbar-links'>
          <ul>
            <li className='dropdown'>Sobre Nós<span className='drop-line'></span></li>
            <li className='dropdown'>Portfólio<span className='drop-line'></span></li>
            <li>Recrutamento</li>
            <li>Contactos</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;