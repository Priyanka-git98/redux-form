import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Connect } from 'react-redux';
// import {logout} from '../redux/action';

const Navbar = ({ logout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shopping App
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
