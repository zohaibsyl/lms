// StudentContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { useStudentContext } from '../context/StudentContext'; // Adjust path as necessary
import { useStudentContext } from './StudentContext.jsx';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <StudentContext.Provider value={{ addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
