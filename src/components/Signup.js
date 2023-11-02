// MyForm.js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate();
  const { handleSubmit } = props;

  const onSubmit = (formData) => {
    // Handle form submission here
    console.log('Form data submitted:', formData);
    navigate ('./login')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default reduxForm({
  form: 'myForm', 
})(Signup);
