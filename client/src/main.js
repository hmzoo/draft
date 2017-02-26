import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import request from 'request';

import Num from './components/Num.js'

let store = createStore(reducers);



request.get('http://127.0.0.1:3000/num', (error, response, body) => {
        console.log(error, response, body);
    }

);

ReactDOM.render(
    <Provider store={store}>
    <Num num="ok"/></Provider>, document.getElementById('app'));
