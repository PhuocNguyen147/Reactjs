import React, { Component } from 'react';

import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Carousel from './section/Carousel';
import Slider from './section/Slider';
import Specialty from './section/Specialty';
import Medical from './section/Medical';
import Footer from './section/Footer';
import About from './section/About';
import './HomePage.scss'
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };


        return (
            <div>
                <HomeHeader />
                <Slider />
                <Carousel />
                <Specialty settings={settings} />
                <Medical settings={settings} />
                <About />
                <Footer />
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
