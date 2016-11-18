var connect =require('react-redux').connect;
var ItemList = require('./ItemList.jsx');

const mapStateToProps = function(state){
  
  return {
    items: state
  }
}

module.exports=connect(mapStateToProps)(ItemList);
