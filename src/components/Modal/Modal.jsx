import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalEl } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseKey);
  }

  onCloseKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onCloseBackdrop = e => {
   if(e.currentTarget === e.target){
    this.props.onClose();
   }
  }

  render(){
    return createPortal(
      <ModalOverlay onClick={this.onCloseBackdrop}>
        <ModalEl>
          {this.props.children}
        </ModalEl>
      </ModalOverlay>,
      modalRoot,
    )
  }
}