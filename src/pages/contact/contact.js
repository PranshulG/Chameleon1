import React, { useState } from 'react';
import { styled } from 'styled-components';
import backgroundImage from '../login/forest.jpg';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the message using the formData state.
    // You can use AJAX requests, API calls, or any other suitable method for message submission.
    console.log('Form data:', formData);
  };

  return (
    <Wrapper>
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions use form down below.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
max-width: 500px;
margin: 0 auto;
padding: 20px;
background-color: #f7f7f7;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

/* Add background image using the imported image */
background-image: url(${backgroundImage});
background-size: cover;
background-position: center;


h2 {
  margin-bottom: 10px;
  color: black;
  text-align:center;
}

p {
  color: white;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  font-size: 15px;
  text-align:end;
}


form {
  display: grid;
  grid-gap: 10px;

  label {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
}

`

export default Contact;
