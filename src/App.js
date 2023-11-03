// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet } from 'react-router-dom';
import Signup from './components/Signup';
// import Login from './components/Login';

function App() {
  return (
    <div>
      <Signup/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/" element={<Navigate to="/login" />} />

    //   </Routes>
    // </Router>
  );
}



export default App;
