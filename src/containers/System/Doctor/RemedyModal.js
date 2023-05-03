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
class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {


    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {


        }



    }





    render() {

        let { isOpenModal, closeRemedyModal, dataModal } = this.props;



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
                    <div class="modal-header">
                        <h5 class="modal-title">Gửi hóa đơn khám bệnh thành công</h5>
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden='true'>x</span></button></div>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={closeRemedyModal}>
                            Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={closeRemedyModal}>
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
