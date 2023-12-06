import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/accpicklogo.png';
import './navbar.css';
import ContactForm from '../contactForm/ContactForm';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#accpickpos'>What is Accpick</a></p>
    <p><a href='#possibility'>Services</a></p>
    <p><a href='#features'>Support</a></p>
    <p><a href='#price'>Price</a></p>
    <p><a href='#shops'>Shops</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };
  return (
    <div className='accpick__navbar'>
      <div className='accpick__navbar-links'>
        <div className='accpick__navbar-links_logo'>
          <a href="#home"><img src={logo} alt='Accpick' /></a>
        </div>
        <div className='accpick__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='accpick__navbar-sign'>        
        <button type='button' onClick={toggleContactForm}>Contact Us</button>
        {showContactForm && (
          <div className="accpick__navbar-menu_container scale-up-center">
            <ContactForm />
          </div>
        )};
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
                <button type='button' onClick={toggleContactForm}>Contact U</button>
              </div>             
            </div>
          </div>
        )};

        {showContactForm && (
          <div className="accpick__navbar-menu_container scale-up-center">
            <ContactForm />
          </div>
        )};
      </div>
    </div>
  );
};

export default Navbar