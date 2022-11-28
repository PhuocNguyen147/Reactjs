import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Specialty.scss'
class Specialty extends Component {

    render() {


        return (
            <div className='Section'>
                <div className='specialty-content'></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
