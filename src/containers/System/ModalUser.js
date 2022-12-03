import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',

        }
    }

    componentDidMount() {
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
                break;
            }
        }
        return isValidate;
    }



    handllAddnewUser = () => { // Tạo người dùng
        let isValidate = this.checkValidateInput();
        if (isValidate === true) {
            this.props.createNewUser(this.state);

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
                        Tạo Khách hàng
                    </ModalHeader>
                    <ModalBody>
                        <div className='modalBody'>
                            <div className='inputContainer'>
                                <label>Email: </label>
                                <input type="email"
                                    onChange={(event) => { this.handlleOnchangeInput(event, 'email') }}
                                    placeholder='@example.com'
                                />


                            </div>
                            <div className='inputContainer'>
                                <label>Password: </label>
                                <input type="password"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "password") }}
                                    placeholder='password'
                                />
                            </div>
                            <div className='inputContainer'>
                                <label>Firstname: </label>
                                <input type="email"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "firstName") }}
                                    placeholder='Firstname'
                                />
                            </div>
                            <div className='inputContainer'>
                                <label>LastName: </label>
                                <input type="text"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "lastName") }}
                                    placeholder='Lastname'
                                />
                            </div>
                            <div className='inputContainer address'>
                                <label>Address: </label>
                                <input type="text"
                                    onChange={(event) => { this.handlleOnchangeInput(event, "address") }}
                                    placeholder='@example.com'
                                />
                            </div>

                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3 btn-success'
                            onClick={() => { this.handllAddnewUser() }}>
                            Tạo
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





