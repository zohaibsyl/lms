import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function AdmissionForm() {
 
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    className: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      className: '',
      gender: '',
    });
  };

  
  return (
    <div style={{ justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}> Registration Form</h1>
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
          Phone Number: <br />
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
          Date Of Birth: <br />
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
          Qualification: <br />
          <input
            style={{ width: '380px', height: '25px' }}
            type="text"
            name="text"
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

        <button style={{ backgroundColor: 'green', width: '380px', height: '35px' }} as={Link} to={"/StudentList"}>Submit</button>
        {/* <button 
          style={{ backgroundColor: 'green', width: '380px', height: '35px' }}
          type="submit"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default AdmissionForm;
