import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link exact to='/admin' className='navbar-logo' onClick={closeMobileMenu}>
          <div className='flex'>
            <img className="h-8 mr-3" src="/images/logo.png" alt="" />
            <h1 className='letter-spacing'>K|TRACK</h1>
          </div>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>


        <li className='nav-item'>
            <NavLink
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to='/history'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              History
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to='/admin/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dashboard
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to='/admin/tracking'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Tracking
            </NavLink>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/admin/management'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Management <i className='ml-2 fas fa-caret-down' />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li>
            <NavLink
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              LOGOUT
            </NavLink>
          </li>
        </ul>

        <Link to='login'>
          <button
            className='flex btn-login'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>

            LOGIN
          </button>
        </Link>

        {/* <button
          className='flex btn-login'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          LOGOUT
        </button> */}

      </nav>
    </>
  );
}

export default Navbar;
