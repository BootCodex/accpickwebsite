import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import './fixedButton.css'; // Import the CSS file for styling

const FixedButton = () => {
  const whatsappNumber = '+27769188228';
  return (
    <div className="fixed-button-container">


          <a
               href={`https://wa.me/${whatsappNumber}`}
               className="whatsapp_float"
               target="_blank"
               body="hello world"
               rel="noopener noreferrer">
               <FaWhatsapp  className='icon'/>
           </a>
    </div>
  );
};

export default FixedButton;
