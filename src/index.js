import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import 'cardinalcss/cardinal.css';
import './index.css';
import store from './store';


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });


ReactDOM.render(
   <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
