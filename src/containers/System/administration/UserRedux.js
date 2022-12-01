import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService'
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genrderArr: []
        }
    }
    state = {

    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender');
            this.setState({
                genrderArr: res.data
            })
        } catch (e) {

        }
    }


    render() {
        let genders = this.state.genrderArr;
        return (

            <React.Fragment>
                <div className='title text-center'>Thêm bác sĩ</div>
                <div className='container pt-5'>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label"><b>Email</b></label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputfirstName4" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="inputfirstName4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputlastName4" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="inputlastName4" />
                        </div>
                        <div class="col-6">
                            <label for="phonenumber" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="phonenumber" placeholder="0123456789" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress" class="form-label">Địa chỉ</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Cần Thơ" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputimage" class="form-label">image</label>
                            <input type="text" class="form-control" id="inputimage" />
                        </div>

                        <div class="col-md-2">
                            <label for="inputgender" class="form-label">Giới tính</label>
                            <select id="inputgender" class="form-select">
                                {genders && genders.length > 0 && genders.map((item, index) => {
                                    return (<option key={index}> {item.valueVi}</option>)
                                })}


                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Chức vụ</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Bạn là: </label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>



                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
