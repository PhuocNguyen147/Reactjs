import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils"

import { changeLangugeApp } from '../../store/actions';
class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLangugeAppRedux(language)

    }

    render() {


        return (
            <React.Fragment> {/* render nhiều khối */}
                <div className='home-header-container '>
                    <div className='home-header-content-top pt-3'>
                        <div className=' left-content'>
                            <div className='phone'>
                                <a href='tel:1809 281'>
                                    <i className="fas fa-phone fa-flip-horizontal fs-17"></i>
                                    <span className="sdt">1809 281</span>
                                </a>
                            </div>


                            <ul className='lang'>
                                <li className='flag'>
                                    <div className='VI'> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="Tiếng Việt"
                                        onClick={() => this.changeLanguage(LANGUAGES.VI)}
                                    />
                                    </div>
                                    {/* <a lang="vi" hrefLang='vi' href=''>

                                    </a> */}
                                </li>
                                <li className='flag'>
                                    <div className='EN'> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="English"
                                        onClick={() => this.changeLanguage(LANGUAGES.EN)}
                                    />
                                    </div>
                                    {/* <a lang='en-Us' href=''>

                                    </a> */}
                                </li>
                            </ul>
                        </div>


                        <div className='right-content-top'>
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>

                                    <a href="" class="btn ">
                                        <i className="far fa-calendar-alt"></i>
                                        <FormattedMessage id="homeheader.Appointment" />

                                    </a>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>
                                    <a href="" class="btn">
                                        <i className="fas fa-stethoscope"></i>
                                        <FormattedMessage id="homeheader.Patient Test results"> </FormattedMessage>

                                    </a>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>
                                    <a href="" class="btn btn-success">
                                        <i className="fas fa-globe"></i>
                                        <FormattedMessage id="homeheader.online pharmacy"></FormattedMessage>

                                    </a>
                                </div>
                            </div>
                        </div>

                    </div >
                    {/* <hr></hr> */}
                    <div className='home-header-content-bottom  '>
                        <div className='left-content '>
                            <i className="fas fa-bars"></i>
                            <div className='logo'></div>

                        </div>

                        <div className='center-content'>
                            <div className='menu-content'>
                                <a href='#invite'>
                                    <div><b> <FormattedMessage id="homeheader.clinic introduction"></FormattedMessage></b></div>
                                    <div className='small-menu'><FormattedMessage id="homeheader.about the clinic"></FormattedMessage></div>
                                </a>

                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id="homeheader.service"></FormattedMessage></b></div>
                                <div className='small-menu'><FormattedMessage id="homeheader.about the clinic"></FormattedMessage></div>
                            </div>
                            <div className='menu-content'>
                                <a href='#doctor'>
                                    <div><b><FormattedMessage id="homeheader.DOCTOR'S TEAM"></FormattedMessage></b></div>
                                    <div className='small-menu'><FormattedMessage id="homeheader.about the clinic"></FormattedMessage></div>
                                </a>

                            </div>
                            <div className='menu-content'>
                                <a href='#medical'>
                                    <div><b><FormattedMessage id="homeheader.speciality"></FormattedMessage></b></div>
                                    <div className='small-menu'><FormattedMessage id="homeheader.serchdoctor"></FormattedMessage></div>
                                </a>

                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id="homeheader.CONTACT"></FormattedMessage></b></div>
                                <div className='small-menu'><FormattedMessage id="homeheader.contact at the office"></FormattedMessage></div>
                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id="homeheader.NEWS"></FormattedMessage></b></div>
                                <div className='small-menu'><FormattedMessage id="homeheader.about the clinic"></FormattedMessage></div>
                            </div>


                        </div>

                        <div className='right-content-search'>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='  Search' ></input>
                            </div>

                        </div>

                    </div >

                </div>
                <div className='home-header-banner'>
                    {/* <div className='content'>
                        <div className='option'>
                            <div className='option-content'>
                                <div className='icon-content'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-content'>Khám từ xa</div>
                            </div>

                        </div>
                    </div> */}
                </div>



            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLangugeAppRedux: (language) => dispatch(changeLangugeApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader); //kết nối redux và react với nhau
