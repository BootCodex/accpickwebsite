import React from 'react';
import './header.css';
import windows from '../../assets/windows10.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='accpick__header section__padding' id='home'>
      <div className='accpick__header-content'>
        <h1 className='gradient__text'>
          Welcome to AccpickPOS
          where we go beyond Point of Sale with support
        </h1>
        <p>from all aspects in your day to day business since 1988</p>
        <div className='accpick__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='accpick__header-content__compatible'>
          <img src={windows} alt="windows10 compatible" />
          <p>Will ACCPCIK fit for your business</p>
        </div>
      </div>
      <div className='accpick__header-image'>
          <img src={ai} alt='AI' />
        </div>
    </div>
  )
}

export default Header