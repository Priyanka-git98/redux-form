import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ViewPage from './components/Viewpage';
import Cart from './components/Cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewpage" element={<ViewPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}



export default App;