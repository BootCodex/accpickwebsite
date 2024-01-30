import React, { useState } from 'react';
import possibilityImage from '../../assets/addons-r1.png';
import ContactForm from '../../components/contactForm/ContactForm'; // Import your Contact Form component
import './possibility.css';

const Possibility = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div className='accpick__possibility section__padding' id='possibility'>
      <div className="accpick__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="accpick__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to: <a href="#form" onClick={toggleFormVisibility}>Get Started</a></h4>
      </div>

      {/* Render the ContactForm component conditionally based on isFormVisible */}
      {isFormVisible && <ContactForm />}
    </div>
  )
}

export default Possibility;
