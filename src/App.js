// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signup from './components/Signup';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Signup />
      </div>
    </Provider>
  );
}

export default App;
