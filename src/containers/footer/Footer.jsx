import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa'
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
            <a href="#home"><img src={accpickLogo} alt="logo"  /></a>
            <p></p>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Social Media</h4>
            <a href="https://www.facebook.com/mcmillan.gatsi" target="_blank" rel="noopener noreferrer"><FaFacebook className='icon' /></a>
            <a href="https://www.youtube.com/channel/UCZSbE7-Or9RATumYjepX9Vg/videos" target="_blank" rel="noopener noreferrer"><FaYoutube className='icon'/></a>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="accpick__footer-links_div">
            <h4>Get in touch</h4>
            <p>033 343 6000</p>
            <p>admin@accpick.co.za</p>
          </div>
        </div>
        <div className="accpick__footer-copyright">
          <p>&copy; {currentYear} AccpickPoS. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer