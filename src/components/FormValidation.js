import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const FormValidation = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  // Accessing the global state values from context
  const { globalState } = useContext(GlobalContext);
  const navigate = useNavigate(); // Initialize useNavigate

  // Destructure values from globalState (assuming globalState contains the data)
  const { 
    currentIndex_001, 
    currentIndex_002, 
    currentIndex_003, 
    degree_001, 
    degree_002, 
    degree_003, 
    isPastel, 
    selectedSize, 
    pastelValue, 
    brightValue 
  } = globalState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAction = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform validation
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

    setErrors(validationErrors);

    if (!isValid) {
      return; // Exit early if validation fails
    }

    try {
      // Construct the orderData object with all necessary data points
      const orderData = {
        username: formData.username,
        email: formData.email,
        currentIndex_001,
        currentIndex_002,
        currentIndex_003,
        degree_001,
        degree_002,
        degree_003,
        colorValue: isPastel === 'true' ? pastelValue : brightValue,
        selectedSize,
        createdAt: `Date: ${new Date().toLocaleDateString()} / Time: ${new Date().toLocaleTimeString()}`,
        order_number: `order-${Math.floor(Math.random() * 1000) + 1}`,
        order_id: `${Math.random().toString(36).substr(2, 9)}`,
      };

      console.log('Order Data:', orderData); // Debug log to confirm all fields

      // Send the data to the database
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), // Send all data
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Order submitted successfully! Order Number: ${data.order_number}`);

        // Optionally reset the form
        setFormData({ username: '', email: '' });

        // Navigate to the confirmation page
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
    <form className="sizes_container_form" onSubmit={(e) => e.preventDefault()}>
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
        <button onClick={handleAction} className="buy_button" type="button">buy</button>
      </div>
    </form>
  );
};
