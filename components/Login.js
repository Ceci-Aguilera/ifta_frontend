import Link from 'next/link'
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../styles/Login.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import {AlertDanger} from "./Alerts"

import {useRouter} from "next/router"

const Login = ({login}) => {
//   const { auth, user, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const body = JSON.stringify({
    email,
    password,
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(body);
    if(result=="User Loged in"){
        router.push('/credentials/manage-account/account-info')
    }
    else{
        setMessage(result);
    }
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
          <h1 className={styles.title}>Login</h1>
        </Card.Header>
        <Card.Body className={styles.body}>

          <div className={styles.form_div}>

          <Row>
            <Form.Group className={`mb-3 ${styles.form_group}`}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.form_control}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className={`mb-3 ${styles.form_group}`}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.form_control}
              />
            </Form.Group>
          </Row>
          <Row>
            <Link href={`/credentials/send-request-reset-password/`}>
            <p className={styles.password_p}>
              Forgot password?
            </p>
            </Link>

          </Row>

          <Row>
            <Link href={`/credentials/register/create-account`}>
            <p className={styles.password_p}>
              Create New Account
            </p>
            </Link>

          </Row>

          </div>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <Button
            className={styles.card_footer_button}
            onClick={(e) => loginHandler(e)}
          >
            LOG IN
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
