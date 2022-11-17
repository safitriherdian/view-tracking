import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

          <li className='self-center nav-dropdown'>
            <Menu as="div" className="relative inline-block text-blue-1 text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center px-4 py-2 rounded-md hover:bg-blue-5">
                  Management
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="/admin/management/driver" className={classNames(
                        active ? 'font-bold' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}>
                        Driver
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="/admin/management/kendaraan" className={classNames(
                        active ? 'font-bold' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}>
                        Kendaraan
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="/admin/management/plat" className={classNames(
                        active ? 'font-bold' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}>
                        Plat Nomor
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </li>

          <li>
            <NavLink
              to='/register'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Logout
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700 hover:font-bold">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </NavLink>
          </li>
        </ul>

        <Menu as="div" className="relative inline-block text-left hide">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Hi, User
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 px-2">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(
                    active ? 'font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                    Profile
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1 px-2">
              <Menu.Item>
                {({ active }) => (
                  <div className='flex justify-between items-center'>
                    <a href="/login" className={classNames(
                      active ? 'font-bold' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>
                      Logout
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-4 text-gray-700 hover:font-bold">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

      </nav>
    </>
  );
}

export default Navbar;
