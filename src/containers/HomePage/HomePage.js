import React, { Component } from 'react';

import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Carousel from './section/Carousel';
import Slider from './section/Slider';
import Specialty from './section/Specialty';

class HomePage extends Component {

    render() {


        return (
            <div>
                <HomeHeader />
                <Slider />
                <Carousel />
                <Specialty />
                {/* <div style={{ hight: '1000' }}></div> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
