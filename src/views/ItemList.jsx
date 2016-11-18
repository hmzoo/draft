var React = require('react');
var Item =require('./Item.jsx');

module.exports = React.createClass({



    render: function() {


        return (
          <div>

            {
              this.props.items.map(function(i){
              return (
                <Item data={i.data} key={i.id} select={function(){return this.props.select(i.id)}} />
              );
            },this)
            }

          </div>
          

        );

    }

});
