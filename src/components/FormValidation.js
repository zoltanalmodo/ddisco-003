import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const FormValidation = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  // Accessing the global state values from context
  const { globalState, setGlobalState } = useContext(GlobalContext); // Add setGlobalState for updating global state
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
          order_id: `${Math.random().toString(36).substr(2, 9)}`, // Example order_id generation
          currentIndex_001: globalState.currentIndex_001,
          currentIndex_002: globalState.currentIndex_002,
          currentIndex_003: globalState.currentIndex_003,
          degree_001: globalState.degree_001,
          degree_002: globalState.degree_002,
          degree_003: globalState.degree_003,
          isPastel: globalState.isPastel,
          selectedSize: globalState.selectedSize,
          
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

  const handleClick = async () => {
    // Update global state with username and email
    setGlobalState((prevState) => ({
      ...prevState,
      username: formData.username,
      useremail: formData.email,
    }));

    // Prepare data to save to the database
    const dataToSave = {
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
    };

    try {
      // Send data to the server
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }

    // Navigate to the /confirm page
    navigate('/confirm');
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
        <button onClick={handleClick} className="buy_button" type="button">buy</button>
      </div>
    </form>
  );
};
