import React from 'react'
import { Field, reduxForm } from 'redux-form';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigate();
    // const { handleSubmit } = props; 

    // const onSubmit = (formData) => {
        
    //     navigate ('./login')
    //   };
    //   return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <Field name="email" component="input" type="email" />
    //       </div>
    //       <div>
    //         <label htmlFor="password">Password</label>
    //         <Field name="password" component="input" type="password" />
    //       </div>
    //       <button type="submit">Login</button>
    //     </form>
    //   );
    };
    
    export default reduxForm({
      form: 'loginForm', 
    })(Login);