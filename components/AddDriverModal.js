import styles from "../styles/AccountEditInfoModal.module.css";
import { Container, Button, Modal, Form, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";

import CreateDriver from "./CreateDriver"

function AddDriverModal({show_modal, close_modal}){


    return(
        <div className="account_edit_info_modal_div">
            <Modal show={show_modal} onHide={close_modal} className="edit-modal">
                <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
                    <Modal.Title className="edit-modal-title">EDIT INFO</Modal.Title>
                </Modal.Header>

                <Modal.Body className="edit-modal-body">

                    <CreateDriver />

               </Modal.Body>

               <Modal.Footer className="edit-modal-footer">
                 <Button
                   variant="secondary"
                   className="edit-modal-close-button"
                   onClick={close_modal}
                 >
                   Close
                 </Button>
                 <Button variant="primary" className="edit-modal-save-button" onClick={(e) => onEditAccountHelper(e)}>
                   Save changes
                 </Button>
               </Modal.Footer>

            </Modal>
        </div>
    );
}

export default AddDriverModal;
