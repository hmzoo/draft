//Counter reducer

const reducer = function(state =0, action) {

    switch (action.type) {
        case 'INC_COUNTER':
            return state + 1
        case 'DEC_COUNTER':
            return state - 1
        default:
            return state
    }
}



export default reducer
