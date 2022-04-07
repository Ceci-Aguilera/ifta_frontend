import Link from 'next/link'
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../../styles/Login.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const SendRequestResetPasswordComponent = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const router = useRouter();

    const sendRequestResetPasswordHandler = async (e) => {
        e.preventDefault();
        await send_request_reset_password(email, setMessage, router);
    };

    return (
        <div className={styles.main_div}>
            <Card className={styles.card}>
                <Card.Header className={styles.card_header}>
                    <h1 className={styles.title}>Reset Password</h1>
                </Card.Header>
                <Card.Body className={styles.body}>
                    <Row>
                        {message ? <div><p>
                            Message: {message}
                        </p></div> : <div></div>}
                    </Row>
                    <Row>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                            <Form.Control
                                className={styles.form_control}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                </Card.Body>
                <Card.Footer className={styles.card_footer}>
                    <Button
                        className={styles.card_footer_button}
                        onClick={(e) => sendRequestResetPasswordHandler(e)}
                    >
                        Reset Password
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

const send_request_reset_password = async (email, setMessage, router) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        email,
    });

    const info_url = `${domain}/user-account/driver/send-request-reset-password`;
    axios
        .post(info_url, body, config)
        .then(async (res) => {
            const result = await res.data;
            router.push('/')
        })
        .catch((error) => {
            console.log(error);
            setMessage("Error User with that email do not exists")
        });
}


export default SendRequestResetPasswordComponent;