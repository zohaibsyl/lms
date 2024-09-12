import React, { useState } from 'react';

// SubjectForm Component with Text Inputs and Select Option
const SubjectForm = ({ onAddSubject }) => {
    const [subject, setSubject] = useState(''); // State for subject input
    const [className, setClassName] = useState(''); // State for class input
    const [selectedSubject, setSelectedSubject] = useState(''); // State for dropdown select

    const predefinedSubjects = [
        'Mathematics',
        'Science',
        'History',
        'English',
        'Geography',
        'Computer Science',
    ];

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleClassChange = (e) => {
        setClassName(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subject && className) {
            onAddSubject({ subject, className, selectedSubject });
            setSubject('');  // Reset subject input
            setClassName('');  // Reset class input
            setSelectedSubject('');  // Reset select input
        }
    };

    return (
        <form 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
            }} 
            onSubmit={handleSubmit}
        >
            <label htmlFor="subject">Enter Subject:</label>
            <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Enter a subject"
            />

            <label htmlFor="class">Enter Class:</label>
            <input
                type="text"
                id="class"
                value={className}
                onChange={handleClassChange}
                placeholder="Enter a class"
            />

            <label htmlFor="select-subject">Select Subject:</label>
            <select id="select-subject" value={selectedSubject} onChange={handleSelectChange}>
                <option value="" disabled>Select a subject</option>
                {predefinedSubjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                ))}
            </select>

            <button type="submit">Add Subject</button>
        </form>
    );
};

// SubjectAdd Component
const SubjectAdd = () => {
    const [subjects, setSubjects] = useState([]);

    const handleAddSubject = (newSubject) => {
        setSubjects([...subjects, newSubject]);
    };

    return (
        <div>
            <h1>Subject Add</h1>
            <SubjectForm onAddSubject={handleAddSubject} />
            <ul>
                {subjects.map((subjectInfo, index) => (
                    <li key={index}>
                        {subjectInfo.subject} - {subjectInfo.className} - {subjectInfo.selectedSubject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubjectAdd;
