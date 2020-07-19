import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClose}
    contentLabel='Selected Option'
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClose}>Close</button>
  </Modal>
);

export default OptionModal;
