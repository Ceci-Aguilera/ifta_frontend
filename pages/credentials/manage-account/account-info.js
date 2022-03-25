import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/AccountInfo.module.css";
import  NextNavbar from "../../../components/Navbar";
import AccountEditInfoModal from "../../../components/AccountEditInfoModal"

import { useAuth } from "../../../context/AuthContext";

import {useEffect, useState} from "react";

export default function AccountInfo() {

    const { auth, user, edit } = useAuth();

    const [show_modal, setShowModal] = useState(false)

    const handleCloseModal = () => setShowModal(false)


  return (user==null)?<div></div>:(
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>
        <div className={styles.account_info_div}>


            <div className={styles.account_info_card_div}>
                <Card className={styles.account_info_card}>
                    <Card.Header className={styles.account_info_card_header}>
                    <h1 className={styles.account_info_title_h1}>
                        Account Info
                    </h1>
                    </Card.Header>

                    <Card.Body className={styles.account_info_card_body}>

                        <Row className={styles.account_info_row}>

                            <Col xs={12} sm={12} md={12} lg={6} className={styles.account_info_col}>

                                <div className={styles.account_info_col_wrapper}>
                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Company Name:
                                        </span>{" "}
                                        {user.company_name}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        EIN No.:
                                        </span>{" "}
                                        {user.ein_no}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Business Type:
                                        </span>{" "}
                                        {user.business_type}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Address:
                                        </span>{" "}
                                        {user.address}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Country:
                                        </span>{" "}
                                        USA
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        City:
                                        </span>{" "}
                                        {user.city}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        State:
                                        </span>{" "}
                                        {user.usa_state.replace("USAState.", "")}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Zipcode:
                                        </span>{" "}
                                        {user.zipcode}
                                    </p>
                                </div>

                            </Col>

                            <Col xs={12} sm={12} md={12} lg={6} className={styles.account_info_col}>
                                <div className={styles.account_info_col_wrapper}>
                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Phone:
                                        </span>{" "}
                                        {user.phone}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Fax:
                                        </span>{" "}
                                        {user.fax}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Name:
                                        </span>{" "}
                                        {user.contact_name}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Email:
                                        </span>{" "}
                                        {user.email}
                                    </p>

                                    <p className={styles.account_info_card_p}><span className={styles.account_info_card_span}>
                                        Paid Until:
                                        </span>{" "}
                                        {user.paid_until}
                                    </p>
                                </div>
                            </Col>

                        </Row>

                    </Card.Body>

                    <Card.Footer className={styles.account_info_card_footer}>
                            <div className={styles.account_info_button_div}>
                                <Button variant="danger" className={styles.account_info_button} onClick={(e) => setShowModal(true)}>
                                    EDIT INFO
                                </Button>
                            </div>
                    </Card.Footer>
                </Card>
            </div>

        </div>


        <AccountEditInfoModal user={user} editModal={edit} show_modal={show_modal} close_modal={handleCloseModal} />
      </main>
    </div>
  );
}
