import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { connect } from 'react-redux';
import { useNavigate} from 'react-router-dom'; // Import withRouter
import { logout } from '../redux/action';

const Navbar = ({ logout }) => {
    const navigate = useNavigate();
  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Account
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
    logout,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)((Navbar));