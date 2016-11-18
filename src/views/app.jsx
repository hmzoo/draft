var React = require('react');
var ItemListContainer = require('./ItemListContainer.jsx');
//var connect =require('react-redux').connect;
var App = React.createClass({

    render: function() {

        return (
            <div>
                <ItemListContainer/>

            </div>
        );
    }
});

module.exports = App;
