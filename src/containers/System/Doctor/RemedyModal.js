import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './RemedyModal.scss'
import _ from 'lodash';
import Toast from 'reactstrap';
import { FormattedMessage } from 'react-intl';
// import { LANGUAGES } from '../../../../utils';
import { toast } from 'react-toastify';
import moment from 'moment';
import { CommonUtils } from '../../../utils'
class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: '',

        }
    }

    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {


        }
        if (prevProps.dataModal !== this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }


    handleOnchangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data = data[0];
        if (file) {
            let base46 = await CommonUtils.getBase64(file); //Hàm encode mã hóa ảnh thành base64

            let ObjectUrl = URL.createObjectURL(file);
            this.setState({

                imgBase64: base46
            })
        }
    }
    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }
    render() {

        let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props;



        // console.log('data state', this.state)

        return (
            <>
                <Modal
                    isOpen={isOpenModal}
                    /* toggle={ } */
                    className={'booking-modal-container'}
                    size='md'
                    centered
                >

                    {/* <ModalHeader >Modal title</ModalHeader> */}
                    <div className="modal-header">
                        <h5 className="modal-title">Gửi hóa đơn khám bệnh thành công</h5>
                        <button type="button" className="close" aria-label="Close" onClick={closeRemedyModal}>
                            <span aria-hidden='true'>x</span></button></div>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <label>Email bệnh nhân</label>
                                <input className='form-control' type='email' value={this.state.email}
                                    onChange={(event) => this.handleOnchangeEmail(event)}
                                />
                            </div>
                            <div className='col-6 form-group'>
                                <label>Chọn file đơn thuốc</label>
                                <input className='form-control-file' type='file'
                                    onChange={(event) => this.handleOnchangeImage(event)}
                                />
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='btn' color="primary" onClick={() => this.handleSendRemedy()}>
                            Gửi
                        </Button>{' '}
                        <Button className='btn' color="secondary" onClick={closeRemedyModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>


            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
