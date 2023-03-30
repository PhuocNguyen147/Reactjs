import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Footer.scss'
//slick
// import React from 'react';
// import { Slide } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Footer extends Component {

    render() {
        return (
            <React.Fragment>

                <div class="contact" >
                    <div class="right">
                        <div class="app">
                            <h3>Download Our App</h3>
                            <img src="Img/download-on-the-app-store-apple-1.png" alt="" />
                            <img src="Img/google-play-badge-1.png" alt="" />
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="footer">
                    <div class="footer_content">
                        <div class="about">
                            <h3>Nguyễn Hữu Phước</h3>
                            <p>Khoa Công Nghệ Thông Tin</p>
                            <p>&copy; 2023 Hospital B1809281</p>

                        </div>
                        <div class="list">
                            <div class="nav">
                                <h3>Let Us Help You</h3>
                                <ul>
                                    <li><a href="#">About US</a></li>
                                    <li><a href="#">Ruler & Reservation</a></li>
                                    <li><a href="#">Policies</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Media Center</a></li>
                                </ul>
                            </div>



                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="copyrights">

                    </div>
                </div>
            </ React.Fragment >

        );
    };


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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
