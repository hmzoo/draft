import React from 'react';
import { connect } from 'react-redux'


const Counter =({value,onClick_INC,onClick_DEC})=>(
  <div className="box">
  <button className="btn" onClick={onClick_INC}> INC </button>
  <button className="btn" onClick={onClick_DEC}> DEC </button>
    <p>{value}</p>
  </div>
)


const mapStateToProps = (state) => {
  return {
    value: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick_INC: () => {
      dispatch({ type: 'INCREMENT' })
    },
    onClick_DEC: () => {
      dispatch({ type: 'DECREMENT' })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
