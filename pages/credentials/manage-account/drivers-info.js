import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/DriverInfo.module.css";
import NextNavbar from "../../../components/Navbar";
import AddDriverModal from "../../../components/AddDriverModal"
import EditDriverModal from "../../../components/EditDriverModal"

import { useAuth } from "../../../context/AuthContext";
import { useDrivers } from "../../../context/DriversContext";
import { AlertDanger } from "../../../components/Alerts"

import { useEffect, useState } from "react";

export default function DriverInfo() {

    const { auth, user } = useAuth();
    const { drivers, editDriver, deleteDriver } = useDrivers();

    const [show_modal, setShowModal] = useState(false)
    const [show_edit_modal, setShowEditModal] = useState(false)
    const [selected_driver, setSelectedDriver] = useState(null)

    const handleCloseModal = () => setShowModal(false)
    const handleCloseEditModal = () => setShowEditModal(false)

    const onSelectDriver = (e, driver) => {
        e.preventDefault();
        setSelectedDriver(driver);
        setShowEditModal(true);
    }

    const onDelete = async (e, driver) => {
        e.preventDefault();
        setSelectedDriver(driver)
        await deleteDriver(driver.id);
    }


    return (user == null) ? <div></div> : (
        <div className={styles.container}>
            <Head>
                <title>IFTA ya! Drivers Information</title>
                <meta name="description" content="IFTA ya! section to view and edit the drivers information" />
            </Head>

            <NextNavbar />

            <main className={styles.main}>
                <div className={styles.drivers_info_div}>

                    {(drivers !== null) ? (
                        <div>

                            {new Date().valueOf() > new Date(user.paid_until).valueOf() ? <div className={styles.drivers_info_alert_div}>
                                <AlertDanger error={"Account Inactive"} error_description={"Account is inactive as this quarter has not been purchased. To buy the service for this quarter go to Payment."} />
                            </div> : <div></div>}

                            <Card className={styles.drivers_info_table_card}>
                                <Card.Header className={styles.drivers_info_table_card_header}>
                                    <Row className={styles.drivers_info_table_card_header_row}>
                                        <Col xs={3} sm={3} md={3} lg={3} className={styles.drivers_info_table_card_header_col}>
                                            <span className={styles.drivers_info_table_card_header_span}>
                                                EMAIL
                                            </span>
                                        </Col>

                                        <Col xs={3} sm={3} md={3} lg={3} className={styles.drivers_info_table_card_header_col}>
                                            <span className={styles.drivers_info_table_card_header_span}>
                                                FIRST NAME
                                            </span>
                                        </Col>

                                        <Col xs={3} sm={3} md={3} lg={3} className={styles.drivers_info_table_card_header_col}>
                                            <span className={styles.drivers_info_table_card_header_span}>
                                                LAST NAME
                                            </span>
                                        </Col>

                                        <Col xs={3} sm={3} md={3} lg={3} className={styles.drivers_info_table_card_header_col}>
                                            <span className={styles.drivers_info_table_card_header_span}>
                                                CDL NO.
                                            </span>
                                        </Col>
                                    </Row>

                                    <h1 className={styles.drivers_info_h1}>DRIVERS</h1>
                                </Card.Header>



                                <Card.Body className={styles.drivers_info_table_card_body}>

                                    {drivers.map((driver, index) => {
                                        return (
                                            <Card key={index} className={styles.drivers_info_div_card}>
                                                <Card.Body className={styles.drivers_info_div_card_body}>

                                                    <Row className={styles.drivers_info_div_card_row}>
                                                        <Col xs={12} sm={12} md={12} lg={3} className={styles.drivers_info_div_card_col}>
                                                            <span className={styles.drivers_info_div_card_header_span}>
                                                                Email:
                                                            </span>{" "}<span className={styles.drivers_info_div_card_span}>
                                                                {driver.email}
                                                            </span>
                                                        </Col>

                                                        <Col xs={12} sm={12} md={12} lg={3} className={styles.drivers_info_div_card_col}>
                                                            <span className={styles.drivers_info_div_card_header_span}>
                                                                First Name:
                                                            </span>{" "}<span className={styles.drivers_info_div_card_span}>
                                                                {driver.first_name}
                                                            </span>
                                                        </Col>

                                                        <Col xs={12} sm={12} md={12} lg={3} className={styles.drivers_info_div_card_col}>
                                                            <span className={styles.drivers_info_div_card_header_span}>
                                                                Last Name:
                                                            </span>{" "}<span className={styles.drivers_info_div_card_span}>
                                                                {driver.last_name}
                                                            </span>
                                                        </Col>

                                                        <Col xs={12} sm={12} md={12} lg={3} className={styles.drivers_info_div_card_col}>
                                                            <span className={styles.drivers_info_div_card_header_span}>
                                                                CDL No:
                                                            </span>{" "}<span className={styles.drivers_info_div_card_span}>
                                                                {driver.cdl_no}
                                                            </span>
                                                        </Col>
                                                    </Row>

                                                </Card.Body>

                                                <Card.Footer className={styles.drivers_info_div_card_footer}>

                                                    <Row className={`${styles.drivers_info_div_card_row} ${styles.drivers_info_div_button_row}`}>
                                                        <Col xs={6} sm={6} md={6} lg={6} className={` ${styles.drivers_info_div_card_col} ${styles.trucks_info_div_button_col}`} >

                                                            <div className={styles.drivers_info_card_button_div}>
                                                                <Button variant="danger" className={styles.drivers_info_card_button} onClick={(e) => onSelectDriver(e, driver)}>
                                                                    EDIT
                                                                </Button>
                                                            </div>

                                                        </Col>

                                                        <Col xs={6} sm={6} md={6} lg={6} className={` ${styles.drivers_info_div_card_col} ${styles.trucks_info_div_button_col}`} >

                                                            <div className={styles.drivers_info_delete_button_div}>
                                                                <Button variant="danger" className={styles.drivers_info_delete_button} onClick={(e) => onDelete(e, driver)}>
                                                                    DELETE
                                                                </Button>
                                                            </div>

                                                        </Col>

                                                    </Row>
                                                </Card.Footer>
                                            </Card>
                                        )
                                    })}

                                </Card.Body>

                            </Card>
                        </div>
                    ) : <div></div>
                    }

                    {new Date().valueOf() > new Date(user.paid_until).valueOf() ? <div></div> :
                        <div className={styles.trucks_info_button_div}>
                            <Button variant="danger" className={styles.drivers_info_button} onClick={(e) => setShowModal(true)}>
                                ADD DRIVER
                            </Button>
                        </div>
                    }


                </div>

                <AddDriverModal show_modal={show_modal} close_modal={handleCloseModal} />

                {(selected_driver != null && new Date().valueOf() <= new Date(user.paid_until).valueOf()) ?
                    <EditDriverModal driver={selected_driver} editModal={editDriver} show_modal={show_edit_modal} close_modal={handleCloseEditModal} />
                    : <div></div>}

            </main>
        </div>
    );
}
