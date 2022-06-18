import React from 'react'
import { Modal, Button } from "react-bootstrap";

const ModalMessage = ({ titulo, mensaje, showModal, handleModalClose }) => {

    return (
        <>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{mensaje}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMessage