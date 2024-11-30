import React, { useState } from 'react';

export const FormValidation = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    // Validate username
    if (!formData.username) {
      validationErrors.username = 'Username is required.';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Enter a valid email address.';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      // Send form data to the server as JSON
      try {
        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Order submitted successfully');
          // Optionally reset form
          setFormData({ username: '', email: '' });
        } else {
          alert('Failed to submit the order');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting the order');
      }
    }
  };

  return (
    <form className="sizes_container_form" onSubmit={handleSubmit}>
      <div className="user_input_field">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="your name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error_message">{errors.username}</p>}
      </div>

      <div className="user_input_field">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error_message">{errors.email}</p>}
      </div>
      
      <div className="buy_button_container">
        <button className="buy_button" type="submit">buy</button>
      </div>    
    </form>
  );
};
