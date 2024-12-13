import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './project/Todo'; // Import rootReducer
import Todo from './project/Todo'; // Import Todo component

// Create Redux store
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;

