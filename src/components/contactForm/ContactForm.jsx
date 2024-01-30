import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';


function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    phone_number: '',
    message: '',
  });

  
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };


  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting the form
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmissionStatus('error');
      
    } else {
      // Form is valid, you can submit the form data
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log("message sent");
          setSubmissionStatus('success');
          
          // Reset the form after successful submission
          form.current.reset();
          setFormData({
            name: '',
            user_email: '',
            phone_number: '',
            message: '',
          });
          // clear any previous validation errors
          setErrors({});
      }, (error) => {
          console.log(error.text);
          setSubmissionStatus('error');
           
      });
    }
  };


  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.user_email.trim()) {
      errors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      errors.user_email = 'Invalid email address';
    }
    if (!data.phone_number.trim()) {
      errors.phone_number = 'Phone Number is required'
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <div className='contact-form' id='form'>
      {/* Conditional rendering based on submission status */}
      {submissionStatus === 'success' && (
        <div className="success-message">Form submitted successfully!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="error-message">Oops! Something went wrong. Please try again later.</div>
      )}

      <h2>Contact Us</h2>
      
      <form ref={form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          name='user_email'
          value={formData.user_email}
          onChange={handleChange}
        />
        {errors.user_email && <span className="error">{errors.user_email}</span>}

        <label>Phone Number</label>
        <input
          type="text"
          name='phone_number'
          value={formData.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && <span className="error">{errors.phone_number}</span>}

        <label>Message</label>
        <textarea
          name='message'
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <input type="submit" value='Send' />
      </form>
    </div>
  );
}

export default ContactForm;
