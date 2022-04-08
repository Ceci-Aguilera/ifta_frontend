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
                    value={"None"}
                    disabled
                  >
                    State
                  </option>
                  {all_usa_states.map((usa_elm, index) => {
                    return (<option
                    key={index}
                    className={styles.select_form_option}
                    value={usa_elm.abbreviation}
                  >
                    {usa_elm.name}
                  </option>);
                  })}

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


const all_usa_states = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]