import {REGISTRATION} from './actionType';
import {LOGIN} from './actionType';
import {LOGOUT} from './actionType';

export const registration = (formData) => {
    localStorage.setItem('userData', JSON.stringify(formData));
      return {
        type: REGISTRATION,
      };
    };
    
    export const login = (formData) => {
      return {
        type: LOGIN,
        payload: formData,
      };
    };

    export const logout = () => {
      return{
        type: LOGOUT
      };
    };