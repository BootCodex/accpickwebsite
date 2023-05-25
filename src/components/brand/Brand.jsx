import React from 'react';
import './brand.css';
import { hiq, sqp, silver, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='accpick__brand section__padding' id='shops'>
      <div>
        <img src={hiq} alt="google" />
      </div>

      <div>
        <img src={sqp} alt="slack" />
      </div>

      <div>
        <img src={silver} alt="atlassian" />
      </div>
      
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      
      <div>
        <img src={shopify} alt="shopify" />
      </div>

    </div>
  )
}

export default Brand