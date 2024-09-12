import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './screens/SideNavbar';
import Home from './screens/Home';
import StudentList from './screens/StudentList';
import StudentRegistration from './screens/Student-registration';
import TeachersRegistration from './screens/Teacher-registration';
import SubjectAdd from './screens/Subject-add';
import Syllabusform from './screens/Syllabus-form';
import ClassForm from './screens/Class-Form';
import AdmissionForm from './screens/Admission-form';
import ExamScheduleCard from './screens/Exam-schedule';
import ResponsiveAppBar from './screens/Navbar';



function App() {
  return (
    <Router>
      <SideNavbar />
      <Routes>
      <Route path="/" element={ <ResponsiveAppBar/>} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/student-list" element={<StudentList/>} />
       <Route path='/teacher-registration' element={<TeachersRegistration/>}/>
       <Route path='/subject-add' element={<SubjectAdd/>}/>
       <Route path='/syllabus-form' element={<Syllabusform/>}/>
       <Route path='/class-Form' element={<ClassForm/>}/>
       <Route path='/Admission-form' element={<AdmissionForm/>}/>
       <Route path='/exam-schedule' element={<ExamScheduleCard/>}/>


      </Routes>
    </Router>
  );
}

export default App;


