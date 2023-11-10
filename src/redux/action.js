import { REGISTRATION } from './actionType';
import { LOGIN } from './actionType';
import { LOGOUT } from './actionType';
import { ADD_TO_CART } from './actionType';
import { REMOVE_FROM_CART } from './actionType';

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
  return {
    type: LOGOUT
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...item,
      quantity: 1,
    },
  }
}

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  }
}