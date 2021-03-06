import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/CreatePayment.module.css'
import NextNavbar from "../../../components/Navbar"

import {useEffect, useState} from 'react'

import {Container, Form, Row, Col, Card, Button} from 'react-bootstrap'

import { useAuth } from "../../../context/AuthContext";



export default function CreatePayment() {

    const {user, makePayment } = useAuth();

    const [card_num, setCardNum] = useState("");
    const [exp_month, setExpMonth] = useState("");
    const [exp_year, setExpYear] = useState("");
    const [cvc, setCvc] = useState("");

    const body = JSON.stringify({
        card_num,
        exp_month,
        exp_year,
        cvc
    })

    const onMakePayment = async(e) => {
        e.preventDefault();
        await makePayment(body)
    }

  return (user == null)? <div></div>:(
    <div className={styles.container}>
      <Head>
        <title>IFTA ya!</title>
        <meta name="description" costent="IFTA ya! section to make a payment using Stripe" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>

      {new Date().valueOf() > new Date(user.paid_until).valueOf() ?
      <div className={styles.main_div}>
        <Card className={styles.form_card}>
            <Card.Header className={styles.form_card_header}>
                <h1 className={styles.form_card_header_h1}>
                    Make Payment
                </h1>
            </Card.Header>

            <Card.Body className={styles.form_card_body}>
                <Row className={styles.form_card_body_row}>

                    <Col xs={12} sm={12} md={12} lg={12} className={styles.form_card_body_col}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Card Number"
                            value={card_num}
                            onChange={(e) => setCardNum(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} className={styles.form_card_body_col}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Exp Month"
                            value={exp_month}
                            onChange={(e) => setExpMonth(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} className={styles.form_card_body_col}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Exp Year"
                            value={exp_year}
                            onChange={(e) => setExpYear(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} className={styles.form_card_body_col}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="CVC"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            className={styles.form_control}
                          />
                        </Form.Group>
                    </Col>

                </Row>
            </Card.Body>

            <Card.Footer className={styles.form_card_footer}>
                <div className={styles.form_card_footer_button_div}>
                    <Button className={styles.form_card_footer_button} onClick={(e) => onMakePayment(e)}>
                        MAKE PAYMENT
                    </Button>
                </div>
            </Card.Footer>
        </Card>
      </div>:
        <div>
        <Card className={styles.form_card}>

            <Card.Body className={styles.form_card_body}>
              <p>
                This quarter has already been paid
              </p>
            </Card.Body>
          </Card>
        </div>
      }

      </main>
    </div>
  )
}
