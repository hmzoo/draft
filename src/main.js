var ReactDOM = require('react-dom');
var React = require('react');

var App = require('./views/app.jsx');
var Provider = require('react-redux');
var store=require('./store.js');

console.log(store.getState());

var userReducer = function(state = [], action) {
    if (action.type === 'ADD_USER') {
        var newState = state.concat([action.user]);
        return newState;
    }
    return state;
}

store.dispatch({
    type: 'ADD_ITEM',
    item: {
        name: 'Dan'
    }
});


var mainApp = ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

        store.dispatch({
            type: 'ADD_ITEM',
            item: {
                name: 'Dan'
            }
        });
