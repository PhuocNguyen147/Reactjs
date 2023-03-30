import React, { Component } from 'react';

import { connect } from 'react-redux';
import './About.scss'



class About extends Component {

    render() {


        return (
            <div className='section-about'>
                <b>Truyền thông nói gì về chúng tôi</b>
                <div className='section-about-content'>

                    <div className='content-left'>
                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/Zb4XmbubQKM" title="Doctor Mike On How To Succeed In Media" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p className='title'> The Hospital B1809281</p>
                        <p className='content1'>Với sứ mệnh mang tới những dịch vụ y tế chất lượng cao cả trong chuyên môn và phục vụ, The Hospital B1809281 đã xây dựng Phòng khám Đa khoa Nhi Quốc tế The Hospital B1809281 – cơ sở y tế đầu tiên của Hệ thống Phòng khám Quốc tế The Hospital B1809281 và chính thức đưa vào hoạt động từ ngày 11/06/2015. </p>
                        <p className='content1'>Sau gần 6 năm hoạt động, Phòng khám Đa khoa Nhi Quốc tế The Hospital B1809281 đã trở thành một trong những điểm đến uy tín hàng đầu trong chăm sóc sức khỏe trẻ em, được hơn 60.000 khách hàng tại Cần thơ và các tỉnh thành lân cận tin tưởng lựa chọn bởi đội ngũ bác sĩ vững vàng trong chuyên môn, dày dặn trong kinh nghiệm thăm khám, hệ thống trang thiết bị hiện đại, đa dạng các tiện ích và danh mục dịch vụ, chuyên nghiệp và chu đáo trong chăm sóc khách hàng</p>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
