import styles from "../styles/AccountEditInfoModal.module.css";
import { Container, Button, Modal, Form, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";

import CreateAccountTruck from "./CreateAccountTruck"

function AddTruckModal({show_modal, close_modal}){


    return(
        <div className={styles.account_edit_info_modal_div}>
            <Modal show={show_modal} onHide={close_modal} className="edit_modal" size="lg">
                <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
                    <Modal.Title className="edit-modal-title">Add New Truck</Modal.Title>
                </Modal.Header>

                <Modal.Body className="edit_modal_body">

                    <CreateAccountTruck />

               </Modal.Body>

               <Modal.Footer className="edit-modal-footer">
                 <Button
                   variant="secondary"
                   className="edit-modal-close-button"
                   onClick={close_modal}
                 >
                   Close
                 </Button>
               </Modal.Footer>

            </Modal>
        </div>
    );
}

export default AddTruckModal;
