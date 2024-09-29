import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StudentLogin from './components/studentLogin/StudentLogin';
import StudentRegister from './components/sRegister/StudentRegister';
import StudentDashboard from './components/StudentDashboard';
import TeacherLogin from './components/teacherLogin/TeacherLogin';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDetail from './components/StudentDetail/StudentDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/student/:id" element={<StudentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
