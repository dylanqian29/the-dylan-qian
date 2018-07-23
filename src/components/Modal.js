import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Modal.scss';


class Modal extends Component {
  render() {
    return (
      <div className="modal" onClick={()=>this.props.closeModal()}>
        <div className="modal-video" onClick={(event) => event.stopPropagation()}>
          <iframe className="embed-responsive-item" width='100%' height='100%' src={`https://www.youtube.com/embed/${this.props.id}`} frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}


export default Modal;



