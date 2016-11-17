var Redux = require('redux');

var reducer = function(state = [], action) {
    if (action.type === 'ADD_ITEM') {
      console.log("add_item");
        var newState = state.concat([action]);
        return newState;
    }
    return state;
}

module.exports=Redux.createStore(reducer);
