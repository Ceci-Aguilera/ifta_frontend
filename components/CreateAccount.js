import Link from "next/link";
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../styles/CreateAccount.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import {AlertDanger} from "./Alerts"

const CreateAccount = ({register}) => {
  //   const { auth, user, login } = useAuth();

  const [company_name, setCompanyName] = useState("");
  const [ein_no, setEIN_no] = useState("");
  const [re_ein_no, setReEIN_no] = useState("");
  const [business_type, SetBusinessType] = useState("");

  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [usa_state, setUsaState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");

  const [message, setMessage] = useState("");

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
    email,
    password,
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await register(body);
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
          <h1 className={styles.title}>Company Account</h1>
        </Card.Header>
        <Card.Body className={styles.body}>
          <div className={styles.form_div}>
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

              <Col xs={12} sm={12} md={12} lg={4}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Confirm EIN No."
                    value={re_ein_no}
                    onChange={(e) => setReEIN_no(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
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

              <Col xs={12} sm={12} md={12} lg={6}>
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
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="password"
                    size="lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
              <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="password"
                    size="lg"
                    placeholder="Retype Password"
                    value={re_password}
                    onChange={(e) => setRePassword(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>
            </Row>


          </div>
        </Card.Body>

        <Card.Footer className={styles.card_footer}>
          <Button
            className={styles.card_footer_button}
            onClick={(e) => registerHandler(e)}
          >
            REGISTER
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateAccount;
