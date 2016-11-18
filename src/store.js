var Redux = require('redux');

var reducer = function(state = [], action) {
    if (!action || !action.type) {
        return state;
    }
    switch(action.type) {

        case 'ADD_ITEM':
            var newState = state.concat([action.item]);
            return newState;

        default:
            return state;

    }

}

module.exports = Redux.createStore(reducer);
