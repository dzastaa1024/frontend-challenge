import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ closeModal, modalContent, modalAction }) => {
  return ReactDOM.createPortal(
    <Dimmer onClick={closeModal}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={closeModal}>X</CloseIcon>
           <ModalContent>{modalContent}</ModalContent>
        <ModalAction>{modalAction}</ModalAction>
      </ModalBody>
    </Dimmer>,
    document.getElementById("modal")
  );
};

export default Modal;

const ModalBody = styled.div`
  position: relative;
    width: 90vw;
    background-color: #fff;
    padding: 2rem;
    align-self: center;

  @media (min-width: 900px) {
    width: 70rem;
  }
`;

const Dimmer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-content: center;
`;

const ModalAction = styled.div`
  text-align: right;
`;

const ModalContent = styled.div`
  margin-bottom: 3rem;
`;

const CloseIcon = styled.span`
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    background: #d9e021;
    text-align: center;
    border-radius: 5rem;
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
  cursor: pointer;
`;
