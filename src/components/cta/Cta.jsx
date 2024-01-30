import React from 'react';
import './cta.css';

const Cta = () => {

  const handleButtonClick = () => {
    const subject = encodeURIComponent('Your default email subject');
    const to = encodeURIComponent('admin@accpick.co.za');
    const mailtoLink = `mailto:${to}?subject=${subject}`;

    // Open the default email client
    window.location.assign(mailtoLink);
  };

  return (
    <div className='accpick__cta'>
    <div className="accpick__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register today & start exploring the endless possibilities with Accpick.</h3>
    </div>
    <div className="accpick__cta-btn">
      <button type='button' onClick={handleButtonClick}>Get Started</button>
    </div>
</div>
  )
}

export default Cta