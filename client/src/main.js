import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import request from 'request';

import App from './components/App.js'

import reducers from './reducers';
let store = createStore(reducers);

import {setProfilName} from './actions/profil.js';


request.get('http://127.0.0.1:3000/profil', (error, response, body) => {
        console.log(error, response, body);
        store.dispatch(setProfilName(body));
    }

);

ReactDOM.render(
    <Provider store={store}>
    <App/></Provider>, document.getElementById('app'));
