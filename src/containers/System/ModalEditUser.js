import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',

        }
    }

    componentDidMount() {

        let user = this.props.userCerrent;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }

        console.log('crrent user: ', this.props.userCerrent)
    }

    toggle = () => {
        this.props.toggleParent()
    }

    handlleOnchangeInput = (event, id) => {
        let copyState = { ...this.state }; //su dung ... để copy toàn bộ các đối tượng state
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

    }
    checkValidateInput = () => { // kiểm tra xem đối tượng nào chưa nhập
        let isValidate = true;
        let arrInput = ['email',
            'password',
            'firstName',
            'lastName',
            'address'
        ];
        for (let i = 0; i < arrInput.length; i++) {

            if (!this.state[arrInput[i]]) {
                isValidate = false;
                alert('Lỗi: ' + arrInput[i]);
                break
            }
        }
        return isValidate;
    }



    handllSaveUser = () => {
        let isValidate = this.checkValidateInput();
        if (isValidate === true) {
            this.props.editUser(this.state);

        }
    }

    render() {
        return (
            <div className="text-center" >
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'modalContainer'}
                    size="lg"
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()} >
                        Chỉnh sửa thông tin khách hàng
                    </ModalHeader>
                    <ModalBody>
                        <div className='modalBody'>
                            <div className='inputContainer'>
                                <label>Email: </label>
                                <input type="email"
                                    onChange={(event) => { this.handlleOnchangeInput(event, 'email') }}
                                    placeholder='@example.com'
                                    value={this.state.email}
                                    disabled
                                />
                            </div>
                            <div className='inputContainer'>
                                <label>Password: </label>
                                <input type="password"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "password") }}
                                    placeholder='password'
                                    value={this.state.password}
                                    disabled

                                />
                            </div>
                            <div className='inputContainer'>
                                <label>Firstname: </label>
                                <input type="email"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "firstName") }}
                                    placeholder='Firstname'
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className='inputContainer'>
                                <label>LastName: </label>
                                <input type="text"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "lastName") }}
                                    value={this.state.lastName}
                                    placeholder='LastName'
                                />
                            </div>
                            <div className='inputContainer address'>
                                <label>Address: </label>
                                <input type="text"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "address") }}
                                    value={this.state.address}
                                    placeholder='address'
                                />
                            </div>

                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3 btn-success'
                            onClick={() => { this.handllSaveUser() }}>
                            Lưu
                        </Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                            Đóng
                        </Button>
                    </ModalFooter>
                </Modal>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





