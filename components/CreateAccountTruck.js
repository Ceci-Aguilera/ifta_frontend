import Link from "next/link";
import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import styles from "../styles/CreateAccountTruck.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
// import {AlertDanger} from "./Alerts"

const CreateAccountTruck = () => {
    const { auth, user, addTruck } = useAuth();

  const [truck_unit, setTruckUnit] = useState("");
  const [gross_weight, setGrossWeight] = useState("");
  const [fuel_type, setFuelType] = useState("");
  const [vin_no, setVin_no] = useState("");

  const [fleet_name, setFleetName] = useState("");
  const [vehicle_fleet_no, setVehicleFleetNo] = useState("");
  const [make, setMake] = useState("");
  const [truck_model, setTruckModel] = useState("");
  const [license_plate_no, setLicensePlate_no] = useState("");
  const [year, setYear] = useState("");
  const [unloaded_weight, setUnloadedWeight] = useState("");
  const [axle, setAxle] = useState("");
  const [ny_hut, setNyHut] = useState("");
  const [plate_pass, setPlatePass] = useState("");

  const [message, setMessage] = useState("");

  const body = JSON.stringify({
    truck_unit,
    gross_vehicle_weight: gross_weight,
    fuel_type,
    vim_no: vin_no,
    fleet_name,
    vehicle_fleet_no,
    truck_make: make,
    truck_model,
    license_plate_no,
    year,
    unloaded_vehicle_weight: unloaded_weight,
    axle,
    ny_hut,
    or_plate_pass: plate_pass
  });

  const addTruckHandler = async (e) => {
    e.preventDefault();
    const result = await addTruck(body);
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
          <h1 className={styles.title}>Truck</h1>
        </Card.Header>
        <Card.Body className={styles.body}>
          <div className={styles.form_div}>
            <Row>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="*Truck/Unit No."
                    value={truck_unit}
                    onChange={(e) => setTruckUnit(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                <Form.Select
                  size="lg"
                  value={gross_weight}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  className={styles.form_control}
                >
                  <option
                    className={styles.select_form_option}
                    disabled
                  >
                    *Gross Vehicle Weight (GVW)
                  </option>
                  <option
                    className={styles.select_form_option}
                    value={"3000"}
                  >
                    3000
                  </option>
                </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                <Form.Select
                  size="lg"
                  value={fuel_type}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  className={styles.form_control}
                >
                  <option
                    className={styles.select_form_option}
                    disabled
                  >
                    *Select Fuel Type
                  </option>
                  <option
                    className={styles.select_form_option}
                    value={"Biodiesel"}
                  >
                    Biodiesel
                  </option>
                </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="VIN No."
                    value={vin_no}
                    onChange={(e) => setVin_no(e.target.value)}
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
                    placeholder="Fleet Name"
                    value={fleet_name}
                    onChange={(e) => setFleetName(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
              <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Vehicle Fleet No."
                    value={vehicle_fleet_no}
                    onChange={(e) => setVehicleFleetNo(e.target.value)}
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
                    placeholder="Make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Model"
                    value={truck_model}
                    onChange={(e) => setTruckModel(e.target.value)}
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
                    placeholder="License Plate No."
                    value={license_plate_no}
                    onChange={(e) => setLicensePlate_no(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>

              <Col xs={12} sm={12} md={12} lg={6}>
              <Form.Group className={`mb-3 ${styles.form_group}`}>
                <Form.Select
                  size="lg"
                  value={unloaded_weight}
                  onChange={(e) => setUnloadedWeight(e.target.value)}
                  className={styles.form_control}
                >
                  <option
                    className={styles.select_form_option}
                    disabled
                  >
                    Unload Vehicle Weight
                  </option>
                  <option
                    className={styles.select_form_option}
                    value={"3000"}
                  >
                    3000
                  </option>
                </Form.Select>
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                <Form.Select
                  size="lg"
                  value={axle}
                  onChange={(e) => setAxle(e.target.value)}
                  className={styles.form_control}
                >
                  <option
                    className={styles.select_form_option}
                    disabled
                  >
                    Axle
                  </option>
                  <option
                    className={styles.select_form_option}
                    value={"3000"}
                  >
                    3000
                  </option>
                </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="NY HUT Permit No."
                    value={ny_hut}
                    onChange={(e) => setNyHut(e.target.value)}
                    className={styles.form_control}
                  />
                </Form.Group>
              </Col>


              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className={`mb-3 ${styles.form_group}`}>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="OR Plate or Pass No."
                    value={plate_pass}
                    onChange={(e) => setPlatePass(e.target.value)}
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
            onClick={(e) => addTruckHandler(e)}
          >
            ADD TRUCK
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateAccountTruck;
