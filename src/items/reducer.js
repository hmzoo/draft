//Itemsreducer

let nextId=10;

const item = (state = {}, action) => {

  switch (action.type) {
      case 'ADD_ITEM':
          return {id:nextId++,value:"",edit:true};

      case 'DEL_ITEM':;
          return state;

      case 'UPD_ITEM':
        if (state.id !== action.id) {
          return state;
        }
        return Object.assign({}, state, action.item);

      case 'SEL_ITEM':
        if (state.id !== action.id) {
          return Object.assign({}, state, {edit: false});
        }
        return Object.assign({}, state, {edit: true});

      default:
          return state
  }


}



const reducer = function(state =[], action) {

    switch (action.type) {
        case 'ADD_ITEM':
        console.log("ADD ITEM");
            return [...state,item(undefined,action)];

        case 'DEL_ITEM':
        console.log("DEL ITEM");
            return state.filter(t=>t.id!==action.id);

        case 'UPD_ITEM':
        console.log("UPD ITEM");
          return state.map(t =>item(t, action));

        case 'SEL_ITEM':
        console.log("SEL ITEM",action.id);
          return state.map(t =>item(t, action));

        default:
            return state
    }
}



export default reducer
