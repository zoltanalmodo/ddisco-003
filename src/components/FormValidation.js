import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

export const FormValidation = () => {
  const [formData, setFormData] = useState({ username: '', email: '', termsAccepted: false });
  const [errors, setErrors] = useState({ username: '', email: '', termsAccepted: '' });

  const { globalState, updateUserInfo } = useContext(GlobalContext);
  const navigate = useNavigate();

  const { 
    currentIndex_001,
    currentIndex_002,
    currentIndex_003,
    degree_001,
    degree_002,
    degree_003,
    isPastel,
    color, 
    selectedSize,
    pastelValue,
    brightValue,
  } = globalState;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAction = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    let isValid = true;

    if (!formData.username) {
      validationErrors.username = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.termsAccepted) {
      validationErrors.termsAccepted = 'Please accept the terms and conditions.';
      isValid = false;
    }

    setErrors(validationErrors);

    if (!isValid) return;

    try {
      const orderData = {
        username: formData.username,
        email: formData.email,
        currentIndex_001,
        currentIndex_002,
        currentIndex_003,
        degree_001,
        degree_002,
        degree_003,
        color,
        colorValue: isPastel ? pastelValue : brightValue,
        selectedSize,
        createdAt: `Date: ${new Date().toLocaleDateString()} / Time: ${new Date().toLocaleTimeString()}`,
        order_number: `order-${Math.floor(Math.random() * 1000) + 1}`,
        order_id: `${Math.random().toString(36).substr(2, 9)}`,
      };

      updateUserInfo({
        username: formData.username,
        email: formData.email,
      });

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setFormData({ username: '', email: '', termsAccepted: false });
        navigate('/confirm');
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        alert('Failed to submit the order. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting the order. Please check your connection or try again later.');
    }
  };

  return (
    <form className="sizes_container_form" onSubmit={handleAction}>
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

      {/* Terms and Conditions Checkbox */}
      <div className="terms_container">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label htmlFor="termsAccepted">I have read and agree to the Terms and Conditions</label>
        {errors.termsAccepted && !formData.termsAccepted && (
          <p className="error_message">{errors.termsAccepted}</p>
        )}
      </div>

      <div className="buy_button_container">
        <button className="buy_button" type="submit">subscribe</button>
      </div>
    </form>
  );
};
