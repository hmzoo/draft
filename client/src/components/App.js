import React, {Component} from 'react';
import {connect} from 'react-redux';

import Profil from './Profil';

class App extends Component {
    render() {
        return (
            <div >
                <Profil datas={this.props.profil}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      profil: state.profil,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
