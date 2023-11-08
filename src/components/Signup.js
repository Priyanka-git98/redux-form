import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const validate = formData => {
  const errors = {}
  if (!formData.name) {
    errors.name = 'Required'
  } else if (formData.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  // }else if (!/^[A-Za-z]+$/.test(formData.name)) {
  //   errors.name = 'Name should contain only alphabets';
  // }

  if (!formData.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
    errors.email = 'Invalid email address'
  }
  if (!formData.password) {
    errors.password = 'Required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  } else if (!/[A-Z]/.test(formData.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  }
  return errors;
};


const Signup = (props) => {
  const navigate = useNavigate();
  const { handleSubmit } = props;

  const onSubmit = (formData) => {
    if (isFormValid(formData)) {
      console.log('Form data submitted:', formData);
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/login');
    } else {
      console.log('Form data is not valid.');

    }
  };

  function isFormValid(formData) {
    if (formData.name && formData.email && formData.password) {
      return true;
    }
    return false;
  }

  return (
    <Container maxWidth="xs">
      <Typography variant='h4'>Create your account</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={10}>
            <Field
              name="name"
              component={renderTextField}
              type="text"
              label="Name"
              fullWidth
            />
          </Grid>

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
          <Grid>
          <Button type="submit" variant="contained" color='primary'>Signup</Button>
          </Grid>
        </Grid>
      </form>
      <Typography>
        Already have an account? <Link to="/login">Login here</Link>
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
  form: 'myForm',
  validate,
})(Signup);