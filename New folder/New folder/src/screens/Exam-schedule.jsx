import React, { useState } from 'react';

const ExamScheduleCard = () => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [subjects, setSubjects] = useState([]);

    // Mock data for subjects with start and end times based on class
    const classSubjects = {
        1: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' }
        ],
        2: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' }
        ],
        3: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Arts', startTime: '05:00 PM', endTime: '06:30 PM' }
        ],
        
        4: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Arts', startTime: '05:00 PM', endTime: '06:30 PM' }
        ],
        5: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Arts', startTime: '05:00 PM', endTime: '06:30 PM' }
        ],
        6: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' }
        ],
        7: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Science', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Social Studies', startTime: '03:00 PM', endTime: '04:30 PM' }
        ],
        8: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Physics', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Chemistry', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Biology', startTime: '05:00 PM', endTime: '06:30 PM' },
            { name: 'Economics', startTime: '07:00 PM', endTime: '08:30 PM' }
        ],
        9: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Physics', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Chemistry', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Biology', startTime: '05:00 PM', endTime: '06:30 PM' },
            { name: 'Economics', startTime: '07:00 PM', endTime: '08:30 PM' }
        ],
        10: [
            { name: 'Math', startTime: '09:00 AM', endTime: '10:30 AM' },
            { name: 'English', startTime: '11:00 AM', endTime: '12:30 PM' },
            { name: 'Physics', startTime: '01:00 PM', endTime: '02:30 PM' },
            { name: 'Chemistry', startTime: '03:00 PM', endTime: '04:30 PM' },
            { name: 'Biology', startTime: '05:00 PM', endTime: '06:30 PM' },
            { name: 'Economics', startTime: '07:00 PM', endTime: '08:30 PM' }
        ]
    };

    const handleClassClick = (classNumber) => {
        setSelectedClass(classNumber);
        setSubjects(classSubjects[classNumber]);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Exam Schedule</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((classNumber) => (
                    <button
                        key={classNumber}
                        onClick={() => handleClassClick(classNumber)}
                        style={{
                            margin: '5px',
                            padding: '10px 20px',
                            backgroundColor: selectedClass === classNumber ? '#4CAF50' : '#f0f0f0',
                            color: selectedClass === classNumber ? '#fff' : '#000',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Class {classNumber}
                    </button>
                ))}
            </div>

            {selectedClass && (
                <div style={{ textAlign: 'center' }}>
                    <h3>Class {selectedClass} Subjects</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {subjects.map((subject, index) => (
                            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                                <strong>{subject.name}</strong> <br />
                                <span>Time: {subject.startTime} - {subject.endTime}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExamScheduleCard;
