import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import itemApp from './reducers'
import App from './views/App.jsx'

let store = createStore(itemApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
