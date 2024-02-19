import React, { useState } from "react";
import possibilityImage from "../../assets/addons-r1.png";
import ContactForm from "../../components/contactForm/ContactForm"; // Import your Contact Form component
import "./possibility.css";

const Possibility = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div className="accpick__possibility section__padding" id="possibility">
      <div className="accpick__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="accpick__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Embark on a journey of unparalleled efficiency and innovation with our
          state-of-the-art point of sale software, where our solution is crafted
          to exceed your expectations. Picture a realm where transactions
          seamlessly integrate with your unique business processes, streamlining
          operations and boosting productivity. Our software is more than just a
          tool; it's a catalyst for transformation. We offer a suite of features
          that cater to the specific needs of your industry. Embrace a future
          where your operations are optimised and possibilities are limitless.
          Your business is unique – our Point-Of-Sale Software is beyond your
          imagination.
        </p>
        <h4>
          Request Early Access to:{" "}
          <a href="#form" onClick={toggleFormVisibility}>
            Get Started
          </a>
        </h4>
      </div>

      {/* Render the ContactForm component conditionally based on isFormVisible */}
      {isFormVisible && <ContactForm />}
    </div>
  );
};

export default Possibility;
