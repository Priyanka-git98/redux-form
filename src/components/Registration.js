// MyForm.js
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MyForm = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (formData) => {
    // Handle form submission here
    console.log('Form data submitted:', formData);
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'myForm', 
})(MyForm);
