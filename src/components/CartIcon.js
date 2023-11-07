import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = () => {
  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
      <ShoppingCartIcon />
    </Link>
  );
};

export default CartIcon;