import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
