import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
// import './DefaultClass.scss'

import { FormattedMessage } from 'react-intl';
class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    async componentDidMount() {


    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }





    }


    render() {

        // console.log('chek', this.state)
        return (

            <>




            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);