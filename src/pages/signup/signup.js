import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heading from './images/bg.jpg';
import logo from './images/logo.png';
import goo from './images/goo.png';
import mic from './images/mic.png';
//import './signup.css';
import backgroundImage from '../login/forest.jpg';
import styled from 'styled-components';

function Signup() {
    const [contact, setContact] = useState({
        fullname: '',
        email: '',
        password: '',
        login: ''
    });

    const { fullname, email, password, login } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== login) {
            alert('Passwords do not match!');
            return;
        }

        try {
            // Perform user registration logic
            // ...

            // After successful registration, navigate to login page
            // navigate('/login');
        } catch (error) {
            console.log('Error in creating user', error);
        }
    };

    return (
        <Wrapper>
        <div className="signup-container">
                <div className="signup-form">
                    <div className="chamHeading">
                        <img src={logo} alt="Logo" className="logo-image" />
                        <h1 className="logo-text">CHAMELEON</h1>
                    </div>
                    <div className="getStarted">Get Started</div>
                    <div className="auth-method">
                        <div className="google">
                            <img src={goo} alt="Google" className="auth-icon" />
                            Log in with Google
                        </div>
                        <div className="microsoft">
                            <img src={mic} alt="Microsoft" className="auth-icon" />
                            Log in with Microsoft
                        </div>
                    </div>
                    <Form className="input-fields">
                        <Form.Group controlId="fullname">
                            <Form.Label>Name:*</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullname"
                                value={fullname}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:*</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password:*</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="login">
                            <Form.Label>Confirm Password:*</Form.Label>
                            <Form.Control
                                type="password"
                                name="login"
                                value={login}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button className="signup-button" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </Form>
                    <div className="accSign">
                        <p className="ac">
                            Already have an account? <Nav.Link href="/login">Sign in</Nav.Link>
                        </p>
                    </div>
                </div>
                {/* <div md={6} className="signup-image">
                    <img src={heading} alt="Background" />
                </div> */}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
/* Styling for the signup container */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: grey;
}

/* Styling for the signup form */
.signup-form {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 500px;
  background-image: url(${backgroundImage});
}

/* Styling for the chamHeading */
.chamHeading {
  text-align: center;
  margin-bottom: 20px;
}

.logo-image {
  width: 80px;
  height: 80px;
}

.logo-text {
  font-size: 24px;
  margin-top: 10px;
  color: #333;
}

/* Styling for the getStarted */
.getStarted {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* Styling for the auth method */
.auth-method {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.auth-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

/* Styling for the input fields */
.input-fields {
  margin-bottom: 20px;
}

/* Styling for the signup button */
.signup-button {
  width: 100%;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #0056b3;
}

/* Styling for the accSign */
.accSign {
  text-align: center;
}

.ac {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
}

.ac a {
  color: #007bff;
}
`

export default Signup;
