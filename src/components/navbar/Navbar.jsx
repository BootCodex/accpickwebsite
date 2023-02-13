import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/accpicklogo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#accpick'>What is Accpick</a></p>
    <p><a href='#possibility'>Services</a></p>
    <p><a href='#features'>Support</a></p>
    <p><a href='#'>Shops</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='accpick__navbar'>
      <div className='accpick__navbar-links'>
        <div className='accpick__navbar-links_logo'>
          <img src={logo} alt='Accpick' />
        </div>
        <div className='accpick__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='accpick__navbar-sign'>
        <p>Try Us</p>
        <button type='button'>Contact Us</button>
      </div>
      <div className='accpick__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='accpick__navbar-menu_container scale-up-center'>
            <div className='accpick__navbar-menu_container-links'>
              <Menu /> 
              <div className='accpick__navbar-menu_container-links-sign'>
                <p>Try Us</p>
                <button type='button'>Contact Us</button>
              </div>             
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar