import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importa el componente Link
import Logo from '../Logo/Logo.jsx';
import './NavBar.css';

export default function NavBar() {

  const [btnState, setBtnState] = useState(false);

  function botonMenu() {
    setBtnState(btnState => !btnState);
    if (!btnState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  let toggleClassCheck = btnState ? ' nav-menu-visible' : '';

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/' className='logo nav-link'>
          <Logo />
        </Link>
        <button className='nav-toggle' onClick={botonMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-menu${toggleClassCheck}`}>
          <li className='nav-menu-item'>
            <Link to='/' className='nav-menu-link nav-link'>
              Adoptame
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/Protectoras' className='nav-menu-link nav-link'>
              Protectoras
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/Nosotros' className='nav-menu-link nav-link'>
              Nosotros
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/Contacto' className='nav-menu-link nav-link'>
              Contacto
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/Registro/Login' className='nav-menu-link nav-link nav-menu-link_active'>
              Registro/Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
