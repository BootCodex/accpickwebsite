import React from 'react';
import './brand.css';
import { tyre, battery, exhaust, lpg, radiator } from './imports';

const Brand = () => {
  return (
    <div className='accpick_user section__padding' id='shops'>
      <div className='accpick__brand section__padding' >
      <div>
        
        <img src={tyre} alt="tyre" />
        
      </div>

      <div>
        <img src={battery} alt="slack" />
      </div>

      <div>
        <img src={exhaust} alt="atlassian" />
      </div>
      
      <div>
        <img src={lpg} alt="dropbox" />
      </div>
      
      <div>
        <img src={radiator} alt="shopify" />
      </div>
      
    </div>
    <p>Used by Tyre Shops, Exhaust, Parts, Spares, Petrol Station, LPG Gas, Radiators, Venter Trailers, Hotels, <br />
    Veterinary wholesalers, Hardware, Spares, Liquor, Electronics, Engineering, Manufacturing, Paint Coatings and many more!!</p>
    </div>
  )
}

export default Brand