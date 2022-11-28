import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

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
                                    <a lang="vi" hrefLang='vi' href=''>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="Tiếng Việt" />
                                    </a>
                                </li>
                                <li className='flag'>
                                    <a lang='en-Us' href=''>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="English" />
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className='right-content-top'>
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>
                                    <a href="" class="btn ">
                                        <i className="far fa-calendar-alt"></i>
                                        ĐẶT LỊCH KHÁM
                                    </a>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>
                                    <a href="" class="btn">
                                        <i className="fas fa-stethoscope"></i>
                                        TRA CỨU KẾT QUẢ
                                    </a>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-xs-3'>
                                    <a href="" class="btn btn-success">
                                        <i className="fas fa-globe"></i>
                                        NHÀ THUỐC ONLINE
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
                                <div><b>GIỚI THIỆU</b></div>
                                <div className='small-menu'>Về phòng khám</div>
                            </div>
                            <div className='menu-content'>
                                <div><b>DỊCH VỤ</b></div>
                                <div className='small-menu'>Về phòng khám</div>
                            </div>
                            <div className='menu-content'>
                                <div><b>ĐỘI NGŨ BÁC SĨ</b></div>
                                <div className='small-menu'>Về phòng khám</div>
                            </div>
                            <div className='menu-content'>
                                <div><b>CHUYÊN KHOA</b></div>
                                <div className='small-menu'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='menu-content'>
                                <div><b>LIÊN HỆ</b></div>
                                <div className='small-menu'>Tại văn phòng</div>
                            </div>
                            <div className='menu-content'>
                                <div><b>TIN TỨC</b></div>
                                <div className='small-menu'>Về phòng khám</div>
                            </div>


                        </div>

                        <div className='right-content-search'>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='Tìm Chuyên Khoa Khám Bệnh' ></input>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
