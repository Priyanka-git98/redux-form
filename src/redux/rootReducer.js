import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: formReducer, // This is where Redux-Form stores form state

});


export default rootReducer;
