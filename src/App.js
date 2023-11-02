// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MyForm from './components/Registration';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux-Form Example</h1>
        <MyForm />
      </div>
    </Provider>
  );
}

export default App;
