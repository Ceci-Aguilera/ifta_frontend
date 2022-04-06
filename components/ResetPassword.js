import Link from 'next/link'
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const ResetPasswordComponent = ({ uid, token }) => {

    const router = useRouter();

    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [message, setMessage] = useState("")

    const resetPasswordHandler = async (e) => {
        e.preventDefault();
        await reset_password(password, re_password, uid, token, router);
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
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                            <Form.Control
                                className={styles.form_control}
                                type="password"
                                placeholder="Re-enter Password"
                                value={re_password}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                </Card.Body>
                <Card.Footer className={styles.card_footer}>
                    <Button
                        className={styles.card_footer_button}
                        onClick={(e) => resetPasswordHandler(e)}
                    >
                        Reset Password
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

const reset_password = async (password, re_password, uid, token, router) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        password,
        re_password,
    });

    const info_url = `${domain}/user-account/reset-password/${uid}/${token}`;
    axios
        .post(info_url, body, config)
        .then(async (res) => {
            router.push('/credentials/login/')
        })
        .catch((error) => {
            console.log(error);
        });
}


export default ResetPasswordComponent;