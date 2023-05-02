import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal } from 'reactstrap';

import './BookingModal.scss'

import { FormattedMessage } from 'react-intl';
import { classNames } from 'react-select/dist/index-ea9e225d.cjs.prod';
class BookingModal extends Component {
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

        // console.log('chek', this.state)
        return (
            <>
                <Modal
                    isOpen={true}
                    /* toggle={ } */
                    className={'booking-modal-container'}
                    size='lg'
                    centered
                >

                    <div style={{ height: '100px' }}>           heloo modal </div>

                </Modal>
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
