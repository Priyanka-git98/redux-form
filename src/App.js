import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ViewPage from './components/Viewpage';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';


function App() {
  const [user, setUser] = useState({
    name: 'Pancy Lucina',
    email: 'pancy.lucina45@gmail.com',
    phone: '+91-7204-5655-63',
    address: 'INDIA',
    avatar: '/path_to_user_avatar.jpg',
  });

  const handlePhotoChange = (newPhoto) => {
    console.log('Selected photo:', newPhoto);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/viewpage" element = {<ProtectedRoute ><ViewPage/></ProtectedRoute>}/>
        <Route path= "/cart"  element={<Cart/>} />
        <Route path="/userprofile" element={<UserProfile user={user} onPhotoChange={handlePhotoChange} />} />
      </Routes>
    </Router>

  );
}



export default App;