import {
    createStore
} from 'redux';

const counter = function(state = 0, action) {
  console.log(state);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store =createStore(counter);

export default store
