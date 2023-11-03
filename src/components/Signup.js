import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
  const navigate = useNavigate();
  const { handleSubmit } = props;

  const onSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/login')
  };

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
})(Signup);