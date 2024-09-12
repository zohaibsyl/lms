import React, { useState } from 'react';
import styles from './sideNavbar.module.css';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [isOpen, setIsOpen] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(null);
  };

  const sections = [
    {
      label: 'Student Options',
      options: [
        { name: 'Student Registration', link: '/student-registration' },
        { name: 'Student List', link: '/student-list' },
      ],
    },
    {
      label: 'Teacher Options',
      options: [
        { name: 'Teacher Registration', link: '/teacher-registration' },
        { name: 'Teacher List', link: '/teacher-list' },
      ],
    },
    {
      label: 'Subject Options',
      options: [
        { name: 'Subject Add', link: '/subject-add' },
        { name: 'Subject List', link: '/subject-list' },
      ],
    },
    {
      label: 'Syllabus Options',
      options: [
        { name: 'Syllabus Form', link: '/syllabus-form' },
        { name: 'Syllabus List', link: '/syllabus-list' },
      ],
    },
    {
      label: 'School Options',
      options: [
        { name: 'Teacher Registration', link: '/teacher-registration' },
        { name: 'Student Registration', link: '/student-registration' },
      ],
    },
    {
      label: 'Class Options',
      options: [
        { name: 'Class Form', link: '/class-form' },
        { name: 'Class List', link: '/class-list' },
      ],
    },
    {
      label: 'Fees Options',
      options: [
        { name: 'Fees Structure', link: '/fees-structure' },
        { name: 'Fees Voucher', link: '/fees-voucher' },
        { name: 'Fees Submission', link: '/fees-submission' },
      ],
    },
    {
      label: 'Admission Options',
      options: [
        { name: 'Admission Form', link: '/admission-form' },
      ],
    },
    {
      label: 'Exam Options',
      options: [
        { name: 'Exam Schedule', link: '/exam-schedule' },
      ],
    },
  ];

  return (
    <div>

    <div className={styles.side}>

      {sections.map((section, index) => (
        <div key={index}>
          <button style={{textDecoration:'none',border:'none',padding:'9px',width:'190px',gap:'30px',margin:'5px',fontSize:'20px'}} onClick={() => handleButtonClick(index)}>
            {section.label}
          </button>
          {isOpen === index && (
            <ul >
              {section.options.map((option, idx) => (
                <li style={{textDecoration:'flex'}} key={idx}>
                  <Link style={{textDecoration:'none',  color:'black',fontSize:'20px',textAlign:'center'}} to={option.link} onClick={() => handleOptionClick(option.name)}>
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div></div>
  );
}

export default Sidebar;
