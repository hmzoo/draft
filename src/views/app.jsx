var React = require('react');
var connect =require('react-redux').connect;
var App = React.createClass({

    getInitialState: function() {
        return {infos: 'Hello',datas:[]};
    },
    setDatas:function(datas){
      this.setState({datas:datas});
    },
    render: function() {

        return (
            <div id='home'>{this.state.infos}
              <h2>ITEMS</h2>
              <ul>
              {this.props.items.map(function(t){
                return (
                        <li key={t.name} >
                          {t.name}
                        </li>
                      )})}
              </ul>

            </div>
        );
    }
});

var mapStateToProps=function (state) {
  return {
    items: state
  };
}
/*
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}
*/
module.exports=connect(mapStateToProps)(App);
