import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/TrucksInfo.module.css";
import  NextNavbar from "../../../components/Navbar";
import AddTruckModal from "../../../components/AddTruckModal"
import EditTruckModal from "../../../components/EditTruckModal"

import { useAuth } from "../../../context/AuthContext";
import { useDrivers } from "../../../context/DriversContext";
import { useTrucks } from "../../../context/TrucksContext";
import { AlertDanger } from "../../../components/Alerts"
import {TruckFront} from "../../../components/Icons"

import {useEffect, useState} from "react";

function customFilter(current_driver) {
   return function(element) {
      var result = element;
      return result.id === current_driver;
   }
}

export default function TrucksInfo() {

    const {user} = useAuth();
    const {drivers} = useDrivers();
    const {trucks,  editTruck, deleteTruck} = useTrucks();

    const [show_modal, setShowModal] = useState(false)
    const [show_edit_modal, setShowEditModal] = useState(false)
    const [selected_truck, setSelectedTruck] = useState(null)

    const handleCloseModal = () => setShowModal(false)
    const handleCloseEditModal = () => setShowEditModal(false)

    const onSelectTruck = (e, truck) => {
        e.preventDefault();
        setSelectedTruck(truck);
        setShowEditModal(true);
    }

    const onDelete = async(e, truck) => {
        e.preventDefault();
        setSelectedTruck(truck)
        await deleteTruck(truck.id);
    }


  return (user==null)?<div></div>:(
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Trucks Information</title>
        <meta name="description" content="IFTA ya! section to view and edit the trucks information" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>
        <div className={styles.trucks_info_div}>
        {(trucks !== null)?(
            <div>

                
            {new Date().valueOf() > new Date(user.paid_until).valueOf() ? <div className={styles.trucks_info_alert_div}>
                        <AlertDanger error={"Account Inactive"} error_description={"Account is inactive as this quarter has not been purchased. To buy the service for this quarter go to Payment."} />
                    </div> : <div></div>}

                    

                <Card className={styles.trucks_info_table_card}>
                    <Card.Header className={styles.trucks_info_table_card_header}>
                        <Row className={styles.trucks_info_table_card_header_row}>
                            <Col xs={2} sm={2} md={2} lg={2} className={styles.trucks_info_table_card_header_col}>
                                <span className={styles.trucks_info_table_card_header_span}>
                                    UNIT NO.
                                </span>
                            </Col>

                            <Col xs={2} sm={2} md={2} lg={2} className={styles.trucks_info_table_card_header_col}>
                                <span className={styles.trucks_info_table_card_header_span}>
                                    PLATE NO.
                                </span>
                            </Col>

                            <Col xs={3} sm={3} md={3} lg={3} className={styles.trucks_info_table_card_header_col}>
                                <span className={styles.trucks_info_table_card_header_span}>
                                    FLEET NAME
                                </span>
                            </Col>

                            <Col xs={2} sm={2} md={2} lg={2} className={styles.trucks_info_table_card_header_col}>
                                <span className={styles.trucks_info_table_card_header_span}>
                                    VEHICLE FLEET NO.
                                </span>
                            </Col>

                            <Col xs={3} sm={3} md={3} lg={3} className={styles.trucks_info_table_card_header_col}>
                                <span className={styles.trucks_info_table_card_header_span}>
                                    Current Driver
                                </span>
                            </Col>
                        </Row>

                        <h1 className={styles.trucks_info_h1}>TRUCKS</h1>
                    </Card.Header>

                    <Card.Body className={styles.trucks_info_table_card_body}>

                        {trucks.map((truck, index) => {
                            return (
                                <Card key={index} className={styles.trucks_info_div_card}>
                                    <Card.Body className={styles.trucks_info_div_card_body}>

                                        <TruckFront width={100} height={100} className={styles.truck_info_card_icon}/>

                                        <Row className={styles.trucks_info_div_card_row}>
                                            <Col xs={12} sm={12} md={12} lg={2} className={styles.trucks_info_div_card_col}>
                                               <span className={styles.trucks_info_div_card_header_span}>
                                                   Truck Unit:
                                               </span> <span className={styles.trucks_info_div_card_span}>
                                                    {truck.truck_unit}
                                                </span>
                                            </Col>

                                            <Col xs={12} sm={12} md={12} lg={2} className={styles.trucks_info_div_card_col}>
                                            <span className={styles.trucks_info_div_card_header_span}>
                                                  License Plate No:
                                               </span> <span className={styles.trucks_info_div_card_span}>
                                                    {truck.license_plate_no}
                                                </span>
                                            </Col>

                                            <Col xs={12} sm={12} md={12}  lg={3} className={styles.trucks_info_div_card_col}>
                                            <span className={styles.trucks_info_div_card_header_span}>
                                                   Fleet Name:
                                               </span><span className={styles.trucks_info_div_card_span}>
                                                    {truck.fleet_name}
                                                </span>
                                            </Col>

                                            <Col xs={12} sm={12} md={12} lg={2} className={styles.trucks_info_div_card_col}>
                                            <span className={styles.trucks_info_div_card_header_span}>
                                                   Fleet Vehicle Number:
                                               </span> <span className={styles.trucks_info_div_card_span}>
                                                    {truck.vehicle_fleet_no}
                                                </span>
                                            </Col>

                                            <Col xs={12} sm={12} md={12} lg={3} className={styles.trucks_info_div_card_col}>
                                            <span className={styles.trucks_info_div_card_header_span}>
                                                   Driver Email:
                                               </span> <span className={styles.trucks_info_div_card_span}>
                                                    {truck.current_driver?drivers?drivers.filter(customFilter(truck.current_driver))[0]?drivers.filter(customFilter(truck.current_driver))[0].email:"None":"None":"None"}
                                                </span>
                                            </Col>
                                        </Row>

                                    </Card.Body>

                                    <Card.Footer className={styles.trucks_info_div_card_footer}>

                                        <Row className={`${styles.trucks_info_div_card_row} ${styles.trucks_info_div_button_row}`}>
                                            <Col xs ={6} sm={6} md={6} lg={6} className={`${styles.trucks_info_div_card_col} ${styles.trucks_info_div_button_col}`}>

                                                <div className={styles.truck_info_card_button_div}>
                                                    <Button variant="danger" className={styles.trucks_info_card_button} onClick={(e) => onSelectTruck(e, truck)}>
                                                        EDIT
                                                    </Button>
                                                </div>

                                            </Col>

                                            <Col xs ={6} sm={6} md={6} lg={6} className={`${styles.trucks_info_div_card_col} ${styles.trucks_info_div_button_col}`}>

                                                <div className={styles.trucks_info_delete_button_div}>
                                                    <Button variant="danger" className={styles.trucks_info_delete_button} onClick={(e) => onDelete(e, truck)}>
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
        )
        :<div></div>}
        {new Date().valueOf() > new Date(user.paid_until).valueOf() ?<div></div>:
            <div className={styles.trucks_info_button_div}>
                <Button variant="danger" className={styles.trucks_info_button} onClick={(e) => setShowModal(true)}>
                    ADD TRUCK
                </Button>
            </div>
        }


        </div>

        <AddTruckModal show_modal={show_modal} close_modal={handleCloseModal} />

        {(selected_truck != null && new Date().valueOf() <= new Date(user.paid_until).valueOf())?
            <EditTruckModal truck={selected_truck} drivers={drivers} editModal={editTruck} show_modal={show_edit_modal} close_modal={handleCloseEditModal} />
        :<div></div>}

      </main>
    </div>
  );
}
