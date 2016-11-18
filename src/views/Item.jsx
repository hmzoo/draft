var React = require('react');

module.exports = React.createClass({

    render: function() {

        return (

            <div onClick={this.props.select}>{this.props.data}</div>

        );

    }

});
