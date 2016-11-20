import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import 'cardinalcss/cardinal.css';
import './index.css';

import {createStore, combineReducers} from 'redux';

import counterReducer from './counter/reducer';
import itemsReducer from './items/reducer';

let store = createStore(
  combineReducers(
  {counter: counterReducer,items:itemsReducer}),
  {counter: 10,items:[{id:0,value:"A"},{id:1,value:"B"}]}
);

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
