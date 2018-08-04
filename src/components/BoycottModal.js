import React, { Component } from 'react';
import { openModal, closeModal } from '../actions/boycottModalActions';
import { connect } from 'react-redux';

export class BoycottModal extends Component {
    render() {

        const { isActive, openModal, closeModal } = this.props;

        return (
            isActive
            ?
                <div className={isActive ? 'is-active modal' : 'modal'} >
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <button 
                                className="delete"
                                aria-label="close"
                                onClick={closeModal}
                            ></button>
                        </header>
                        <section className="modal-card-body">
                        </section>
                        <footer className="modal-card-foot">
                        </footer>
                    </div>
                </div>
            :
            null
        );
      }
}

const mapStateToProps = (state) => {
    return {
        isActive: state.modal.isActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => { dispatch(openModal()) },
        closeModal: () => { dispatch(closeModal()) }
    }
}

const BoycottModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoycottModal);

export default BoycottModalContainer;
