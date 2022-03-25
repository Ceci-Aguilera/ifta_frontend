import styles from "../styles/AccountEditInfoModal.module.css";
import { Container, Button, Modal, Form, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";

function AccountEditInfoModal({user, editModal, show_modal, close_modal}){


    const [company_name, setCompanyName] = useState(user.company_name);
    const [ein_no, setEIN_no] = useState(user.ein_no);
    const [business_type, SetBusinessType] = useState(user.business_type);

    const [address, setAddress] = useState(user.address);
    const [country, setCountry] = useState(user.country);
    const [city, setCity] = useState(user.city);
    const [usa_state, setUsaState] = useState(user.usa_state);
    const [zipcode, setZipCode] = useState(user.zipcode);
    const [phone, setPhone] = useState(user.phone);
    const [fax, setFax] = useState(user.fax);

    const [name, setName] = useState(user.contact_name);

    const body = JSON.stringify({
      company_name,
      ein_no,
      address,
      city,
      usa_state,
      zipcode,
      phone,
      fax,
      contact_name: name,
    });

    const onEditAccountHelper = (e) => {
        e.preventDefault();
        editModal(body);
    }


    return(
        <div className="account_edit_info_modal_div">
            <Modal show={show_modal} onHide={close_modal} className="edit-modal">
                <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
                    <Modal.Title className="edit-modal-title">EDIT INFO</Modal.Title>
                </Modal.Header>

                <Modal.Body className="edit-modal-body">
                    <Row>
                      <h4 className={styles.section_title_h4}>Company</h4>
                      <Form.Group className={`mb-3 ${styles.form_group}`}>
                        <Form.Control
                          type="text"
                          size="lg"
                          placeholder="Company Name"
                          value={company_name}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className={styles.form_control}
                        />
                      </Form.Group>
                    </Row>

                    <Row>
                      <Col xs={12} sm={12} md={12} lg={4}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="EIN No."
                            value={ein_no}
                            onChange={(e) => setEIN_no(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={12} md={12} lg={8}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                        <Form.Select
                          size="lg"
                          value={business_type}
                          onChange={(e) => SetBusinessType(e.target.value)}
                          className={styles.form_control}
                        >
                          <option
                            className={styles.select_form_option}
                            value={"OWNER_OPERATOR"}
                            disabled
                          >
                            Business Type
                          </option>
                          <option
                            className={styles.select_form_option}
                            value={"OWNER_OPERATOR"}
                          >
                            Owner Operator
                          </option>
                        </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>





                    <Row>
                      <h4 className={styles.section_title_h4}>Physical Address</h4>
                      <Col xs={8} sm={8} md={8} lg={8}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="St, Ave, No."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={4} sm={4} md={4} lg={4}>
                      <Form.Group className={`mb-3 ${styles.form_group}`}>
                        <Form.Select
                          size="lg"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className={styles.form_control}
                        >
                          <option
                            className={styles.select_form_option}
                            value={"USA"}
                            disabled
                          >
                            Country
                          </option>
                          <option
                            className={styles.select_form_option}
                            value={"USA"}
                          >
                            USA
                          </option>
                        </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} sm={12} md={12} lg={4}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={12} md={12} lg={4}>
                      <Form.Group className={`mb-3 ${styles.form_group}`}>
                        <Form.Select
                          size="lg"
                          value={usa_state}
                          onChange={(e) => setUsaState(e.target.value)}
                          className={styles.form_control}
                        >
                          <option
                            className={styles.select_form_option}
                            disabled
                          >
                            State
                          </option>
                          <option
                            className={styles.select_form_option}
                            value={"FL"}
                          >
                            FL
                          </option>

                          <option
                            className={styles.select_form_option}
                            value={"CA"}
                          >
                            CA
                          </option>
                        </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={12} md={12} lg={4}>
                      <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Zipcode"
                            value={zipcode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>
                    </Row>


                    <Row>
                      <Col xs={12} sm={12} md={12} lg={6}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={12} md={12} lg={6}>
                      <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Fax"
                            value={fax}
                            onChange={(e) => setFax(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>
                    </Row>




                    <Row>
                    <h4 className={styles.section_title_h4}>Signing Authority</h4>
                      <Col xs={12} sm={12} md={12} lg={6}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                      </Col>


                    </Row>

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

export default AccountEditInfoModal;
