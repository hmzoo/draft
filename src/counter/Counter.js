import React from 'react';
import {connect} from 'react-redux'


const Counter =({value,onClick_INC,onClick_DEC})=>(
  <div className="box 4/12">
  <button className="btn btn-primary mr--" onClick={onClick_DEC}> DEC </button>
  <button className="btn btn-primary mr--" onClick={onClick_INC}> INC </button>
    <p className='fr m- fz+++'>{value}</p>
  </div>
)


const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick_INC: () => {
      dispatch({ type: 'INC_COUNTER' })
    },
    onClick_DEC: () => {
      dispatch({ type: 'DEC_COUNTER' })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
