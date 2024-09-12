// src/Login.jsx
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./login.module.css";
import { RiContactsFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

function Login({ clickFunc }) {
  const navigate = useNavigate();  // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // For displaying error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    console.log(`Email: ${email}, Password: ${password}`);

  
      navigate('/home');  // Redirect to home page
  
  };

  return (
    <div className={styles.main}>
      <Form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        
        {error && <p className={styles.error}>{error}</p>} {/* Display error message */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> <RiContactsFill /> </Form.Label>
          <Form.Control
            className={styles.input}
            type="email"
            placeholder="Enter email"
            value={email}   // Controlled input
            onChange={(e) => setEmail(e.target.value)}  // Update email state
          /><br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> <IoMdLock /> </Form.Label>
          <Form.Control
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}  // Controlled input
            onChange={(e) => setPassword(e.target.value)}  // Update password state
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign in
        </Button><br />

        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/signup" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
            <IoLogoTwitter />
          </a>
          <a href="https://www.youtube.com/account" target="_blank" rel="noopener noreferrer">
            <SiYoutubemusic />
          </a>
        </div>

        <Link to="/signup"> {/* Update the link path as needed */}
          <Button variant="link" onClick={clickFunc}>
            Create an account
          </Button>
        </Link>
        
      </Form>

      <div>
        <img src="https://img.freepik.com/premium-vector/realistic-reading-desk-vector-illustration_1253202-6139.jpg" alt="Reading Desk" />
      </div>
    </div>
  );
}

export default Login;
