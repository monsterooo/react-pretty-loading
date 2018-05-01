import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    outline: 'none',
    width: '60%',
    borderRadius: '5px',
    padding: '4px',
    backgroundColor: '#fff',
  }
};

class Detail extends Component {
  render() {
    const { active, handleClose, code } = this.props;

    return (
      <Modal
        isOpen={active}
        className="detail"
        style={customStyles}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
      >
        <p>使用代码</p>
        <textarea>
          {code}
        </textarea>
      </Modal>
    )
  }
}

export default Detail;