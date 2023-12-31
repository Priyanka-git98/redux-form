import React,{useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; 

const validate = formData => {
  const errors = {}
  if (!formData.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
    errors.email = 'Invalid email address'
  }
  if (!formData.password) {
    errors.password = 'Required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  } 
  return errors;
};

const Login = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { handleSubmit } = props;

  const onSubmit = (formData) => {
    const storedUserData = JSON.parse(localStorage.getItem('formData'));
    if (storedUserData) {
      if (formData.email === storedUserData.email && formData.password === storedUserData.password) {
        // Successful login, redirect to the view page
        localStorage.setItem('email', formData.email);
        navigate('/viewpage');
      } else {
        // Invalid credentials, show an error message
        setError('Invalid email or password. Please try again.');
      }
    } else {
      // User not found, show an error message
      setError('User not found. Please sign up first.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant='h4'>Log in to your account</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={10}>
            <Field
              name="email"
              component={renderTextField}
              type="email"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={10}>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={10}>
            <Button type="submit" variant="contained" color='primary'>Login</Button>
          </Grid>
        </Grid>
      </form>
      {error && <Typography color="error">{error}</Typography>}
      <Typography>
        Don't have an account? <Link to="/">Sign up here</Link>
      </Typography>
    </Container>
  );
};

const renderTextField = ({ input, label, type, fullWidth, meta: { touched, error } }) => (
  <TextField
    label={label}
    type={type}
    fullWidth={fullWidth}
    {...input}
    error={touched && error}
    helperText={touched && error}
  />
);

export default reduxForm({
  form: 'loginForm',
  validate,
})(Login);
