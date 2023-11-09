const initialState = {
    user: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP':
        return { ...state };
      case 'LOGIN':
        // Handle login action and update user data
        console.log('Updating user data in Redux store:', action.payload);
        return { ...state, user: action.payload };
        case 'LOGOUT':
          return {initialState};
      default:
        return state;
    }
  };
  
  export default Reducer;