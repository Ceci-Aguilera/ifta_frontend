import Link from "next/link";
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../styles/CreateDriver.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDrivers } from "../context/DriversContext";
// import {AlertDanger} from "./Alerts"

const CreateDriver = () => {
    const { auth, user } = useAuth();
    const { addDriver } = useDrivers();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [CDL_no, setCDLNum] = useState("");
  const [country, setCountry] = useState("");
  const [usa_state, setUsaState] = useState("");
  const [email, setEmail] = useState("");


  const [message, setMessage] = useState("");

  const body = JSON.stringify({
    first_name,
    last_name,
    cdl_no: CDL_no,
    country,
    usa_state,
    email
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await addDriver(body);
    setMessage(result);
  };

  return (
    <div className={styles.main_div}>
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

        <Card.Footer className={styles.card_footer}>
          <Button
            className={styles.card_footer_button}
            onClick={(e) => loginHandler(e)}
          >
            SAVE
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateDriver;
