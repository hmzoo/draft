import { connect } from 'react-redux'
import React, {PropTypes} from 'react'
import  ItemList from './ItemList'


const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      console;log(id);
      //dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);
