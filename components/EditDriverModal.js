import Link from "next/link";
import { Card, Col, Row, Container, Button, Form, Modal } from "react-bootstrap";
import styles from "../styles/CreateDriver.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
// import {AlertDanger} from "./Alerts"

const EditDriver = ({driver, editModal, show_modal, close_modal}) => {

  const [first_name, setFirstName] = useState(driver?driver.first_name:"None");
  const [last_name, setLastName] = useState(driver?driver.last_name:"None");
  const [CDL_no, setCDLNum] = useState(driver?driver.cdl_no:"None");
  const [country, setCountry] = useState(driver?driver.country:"None");
  const [usa_state, setUsaState] = useState(driver?driver.usa_state:"None");
  const [email, setEmail] = useState(driver?driver.email:"None");


  const [message, setMessage] = useState("");

  useEffect(() => {
      setFirstName(driver?driver.first_name:"None");
      setLastName(driver?driver.last_name:"None");
      setCDLNum(driver?driver.cdl_no:"None");
      setCountry(driver?driver.country:"None");
      setUsaState(driver?driver.usa_state:"None");
      setEmail(driver?driver.email:"None");
  }, [driver])

  const body = JSON.stringify({
    first_name,
    last_name,
    cdl_no: CDL_no,
    country,
    usa_state,
    email
  });

  const onEditDriverHelper = async (e) => {
    e.preventDefault();
    const result = await editModal(driver.id, body);
    setMessage(result);
  };

  return (
      (driver == null)?<div></div>:(
          <div className="account_edit_info_modal_div">
              <Modal show={show_modal} onHide={close_modal} className="edit-modal">
                  <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
                      <Modal.Title className="edit-modal-title">EDIT INFO</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="edit-modal-body">
      {/* <Row>
            {message?<div>
              <AlertDanger error={"Error"} error_description={message} />
            </div>:<div></div>}
          </Row> */}

      <Card className={styles.card}>
        <Card.Header className={styles.card_header}>
          <h1 className={styles.title}>Driver</h1>
        </Card.Header>
        <Card.Body className={styles.body}>
          <div className={styles.form_div}>

          <Row>

            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group className={`mb-3 ${styles.form_group}`}>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={styles.form_control}
                />
              </Form.Group>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
            </Col>

          </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="CDL No."
                    value={CDL_no}
                    onChange={(e) => setCDLNum(e.target.value)}
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
                    value={"FL"}
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
                </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
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
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
            </Row>


          </div>
        </Card.Body>
      </Card>
      </Modal.Body>

      <Modal.Footer className="edit-modal-footer">
        <Button
          variant="secondary"
          className="edit-modal-close-button"
          onClick={close_modal}
        >
          Close
        </Button>
        <Button variant="primary" className="edit-modal-save-button" onClick={(e) => onEditDriverHelper(e)}>
          Save changes
        </Button>
      </Modal.Footer>
      </Modal>
    </div>
)
  );
};

export default EditDriver;
