import React, { useState, useContext } from 'react';
// Assuming you have a GlobalContext that provides the global state
import { GlobalContext } from '../context/GlobalState'; 

export const FormValidation = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  // Accessing the global state values from context
  const { globalState } = useContext(GlobalContext);  // Getting globalState from context

  // Destructure values from globalState (assuming globalState contains the data)
  const { 
    currentIndex_001, 
    currentIndex_002, 
    currentIndex_003, 
    degree_001, 
    degree_002, 
    degree_003, 
    isPastel, 
    selectedSize 
  } = globalState;

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
      validationErrors.username = 'Please enter your name.';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      try {
        // Create the JSON object with entries in the required order
        const orderData = {
          order_number: `order-${Math.floor(Math.random() * 1000) + 1}`, // Example order number generation
          username: formData.username,
          email: formData.email,
          createdAt: `Date: ${new Date().toLocaleDateString()} / Time: ${new Date().toLocaleTimeString()}`,
          currentIndex_001,
          currentIndex_002,
          currentIndex_003,
          degree_001,
          degree_002,
          degree_003,
          isPastel,
          selectedSize,
          order_id: `${Math.random().toString(36).substr(2, 9)}` // Example order_id generation
        };

        // Log the orderData to check if global state values are being retrieved properly
        console.log(orderData);

        // Send form data to the server
        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          const data = await response.json();
          alert(`Order submitted successfully! Order Number: ${data.order_number}`);

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
