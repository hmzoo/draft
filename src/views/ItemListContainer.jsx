import { connect } from 'react-redux'
import React, {PropTypes} from 'react'
var ItemList = require('./ItemList.jsx')


const mapStateToProps = (state)=>{
  return {
    items: state
  }
}

export default connect(mapStateToProps)(ItemList);
