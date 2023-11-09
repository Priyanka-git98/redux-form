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

  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    console.log('Adding item to cart:', item);
    setCart([...cart, item]);
    console.log('Updated cart:', cart);
  };

  const removeFromCart = (item) => {
    console.log('Removing item from cart:', item);
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    console.log('Updated cart:', updatedCart);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path ="/viewpage" element = {<ProtectedRoute ><ViewPage/></ProtectedRoute>}/> */}
        <Route path="/viewpage" element={<ProtectedRoute><ViewPage addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} /></ProtectedRoute>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/userprofile" element={<UserProfile user={user} onPhotoChange={handlePhotoChange} />} />
      </Routes>
    </Router>

  );
}



export default App;