import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/AccountInfo.module.css";
import  NextNavbar from "../../../components/Navbar";
import AddTruckModal from "../../../components/AddTruckModal"
import EditTruckModal from "../../../components/EditTruckModal"

import { useAuth } from "../../../context/AuthContext";

import {useEffect, useState} from "react";

export default function TrucksInfo() {

    const { auth, user, trucks, editTruck} = useAuth();

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


  return (user==null)?<div></div>:(
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>
        <div className={styles.trucks_info_div}>
        {(trucks !== null)?(
            <div>
            {trucks.map((truck, index) => {
                return (<Card key={index} className={styles.trucks_info_div_card}>
                        <Card.Header className={styles.trucks_info_div_card_header}>
                            {truck.plate}
                        </Card.Header>
                        <Card.Body className={styles.trucks_info_div_card_body}>
                            <p className={styles.trucks_info_div_card_p}>
                                <span className={styles.trucks_info_div_card_span}>
                                    Truck Unit:
                                </span>{" "}
                                {truck.truck_unit}
                            </p>

                            <div className={styles.truck_info_card_button_div}>
                                <Button variant="danger" className={styles.trucks_info_card_button} onClick={(e) => onSelectTruck(e, truck)}>
                                    Edit
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>)
            })}
            </div>
        )
        :<div></div>}

            <div className={styles.trucks_info_button_div}>
                <Button variant="danger" className={styles.trucks_info_button} onClick={(e) => setShowModal(true)}>
                    Add Truck
                </Button>
            </div>
        </div>

        <AddTruckModal show_modal={show_modal} close_modal={handleCloseModal} />

        {(selected_truck != null)?
            <EditTruckModal truck={selected_truck} editModal={editTruck} show_modal={show_edit_modal} close_modal={handleCloseEditModal} />
        :<div></div>}

      </main>
    </div>
  );
}
