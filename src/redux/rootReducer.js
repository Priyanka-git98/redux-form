import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
  form: formReducer, // This is where Redux-Form stores form state
  cart: cartReducer,
});


export default rootReducer;
