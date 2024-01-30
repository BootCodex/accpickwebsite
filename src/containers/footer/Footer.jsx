import React from 'react';
import './footer.css';
import accpickLogo from '../../assets/accpicklogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleButtonClick = () => {
    const subject = encodeURIComponent('Your default email subject');
    const to = encodeURIComponent('admin@accpick.co.za');
    const mailtoLink = `mailto:${to}?subject=${subject}`;

    // Open the default email client
    window.location.assign(mailtoLink);
  };


  return (
    <div className='accpick__footer section__padding'>
        <div className="accpick__footer-heading">
          <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </div>
        <div className="accpick__footer-btn">
          <p><a href="#form" onClick={handleButtonClick}>Request Early Access</a></p>
        </div>
        <div className="accpick__footer-links">
          <div className="accpick__footer-links_logo">
            <img src={accpickLogo} alt="logo" />
            <p>8 Bense Road </p>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Get in touch</h4>
            <p>Overons</p>
            <p>8 Bense Road</p>
            <p>066008932</p>
            <p>codecodexboot@gmail.com</p>
          </div>
        </div>
        <div className="accpick__footer-copyright">
          <p>&copy; {currentYear} AccpickPoS. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer