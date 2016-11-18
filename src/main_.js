var ReactDOM = require('react-dom');
var React = require('react');

var App = require('./views/app.jsx');
var Provider = require('react-redux');
var store=require('./store.js');

var handleChange=function() {

  console.log('store',store.getState());

}

store.subscribe(handleChange);


store.dispatch({
    type: 'ADD_ITEM',
    item: {
        data: 'item 0',
        id:'0'
    }
});
store.dispatch({
    type: 'ADD_ITEM',
    item: {
        data: 'item 1',
        id:'1'
    }
});




var mainApp = ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
