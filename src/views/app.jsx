import React from 'react';
var ItemListContainer = require('./ItemListContainer.jsx');
//var connect =require('react-redux').connect;
var App = React.createClass({

    render: function() {
        console.log(store);
        return (
            <div>
                <ItemListContainer/>
            </div>
        );
    }
});

module.exports = App;
