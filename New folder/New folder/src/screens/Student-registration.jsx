import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    className: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   (formData); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      className: '',
      gender: '',
    });
    navigate('/student-list');
  };

  return (
    <div style={{ justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Student Registration</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          gap: '15px',
        }}
        onSubmit={handleSubmit} 
      >
        <label>
          First Name: <br />
          <input
            style={{ width: '380px', height: '25px' }}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name: <br />
          <input
            style={{ width: '380px', height: '25px' }}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email: <br />
          <input
            style={{ width: '380px', height: '25px' }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Class: <br />
          <input
            style={{ width: '380px', height: '25px' }}
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: '380px', height: '25px' }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        <button
          style={{ backgroundColor: 'green', width: '380px', height: '35px' }}
          type="submit" 
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentRegistration;