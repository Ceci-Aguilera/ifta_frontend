import styles from "../styles/AccountEditInfoModal.module.css";
import { Container, Button, Modal, Form, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";

import CreateAccountTruck from "./CreateAccountTruck"

function EditTruckModal({truck, drivers, editModal, show_modal, close_modal}){

    const [truck_unit, setTruckUnit] = useState(truck?truck.truck_unit:"None");
    const [gross_weight, setGrossWeight] = useState(truck?truck.gross_vehicle_weight:"None");
    const [fuel_type, setFuelType] = useState(truck?truck.fuel_type:"None");
    const [vin_no, setVin_no] = useState(truck?truck.vim_no:"None");

    const [fleet_name, setFleetName] = useState(truck?truck.fleet_name:"None");
    const [vehicle_fleet_no, setVehicleFleetNo] = useState(truck?truck.vehicle_fleet_no:"None");
    const [make, setMake] = useState(truck?truck.truck_make:"None");
    const [truck_model, setTruckModel] = useState(truck?truck.truck_model:"None");
    const [license_plate_no, setLicensePlate_no] = useState(truck?truck.license_plate_no:"None");
    const [year, setYear] = useState(truck?truck.year:"None");
    const [unloaded_weight, setUnloadedWeight] = useState(truck?truck.unloaded_vehicle_weight:"None");
    const [axle, setAxle] = useState(truck?truck.axle:"None");
    const [ny_hut, setNyHut] = useState(truck?truck.ny_hut:"None");
    const [plate_pass, setPlatePass] = useState(truck?truck.or_plate_pass:"None");
    const [current_driver, setCurrentDriver] = useState(truck?truck.current_driver:"None")

    useEffect(() => {
        setTruckUnit(truck?truck.truck_unit:"None");
        setGrossWeight(truck?truck.gross_vehicle_weight:"None");
        setFuelType(truck?truck.fuel_type:"None");
        setVin_no(truck?truck.vim_no:"None");
        setFleetName(truck?truck.fleet_name:"None");
        setVehicleFleetNo(truck?truck.vehicle_fleet_no:"None");
        setMake(truck?truck.truck_make:"None");
        setTruckModel(truck?truck.truck_model:"None");
        setLicensePlate_no(truck?truck.license_plate_no:"None");
        setYear(truck?truck.year:"None");
        setUnloadedWeight(truck?truck.unloaded_vehicle_weight:"None");
        setAxle(truck?truck.axle:"None");
        setNyHut(truck?truck.ny_hut:"None");
        setPlatePass(truck?truck.or_plate_pass:"None");
        setCurrentDriver(truck?truck.current_driver:"None");
    }, [truck])


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
      or_plate_pass: plate_pass,
      current_driver
    });

    const onEditTruckHelper = async(e) => {
        e.preventDefault();
        console.log(body)
        await editModal(truck.id, body);
    }


    return (truck == null)?<div></div>:(
        <div className="account_edit_info_modal_div">
            <Modal show={show_modal} onHide={close_modal} className="edit-modal">
                <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
                    <Modal.Title className="edit-modal-title">EDIT INFO</Modal.Title>
                </Modal.Header>

                <Modal.Body className="edit-modal-body">

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

                    <Row>

                      <Col xs={12} sm={12} md={12} lg={12}>
                        <Form.Group className={`mb-3 ${styles.form_group}`}>
                        <Form.Select
                          size="lg"
                          value={current_driver}
                          onChange={(e) => setCurrentDriver(e.target.value)}
                          className={styles.form_control}
                        >
                          <option
                            className={styles.select_form_option}
                            disabled
                          >
                            Driver
                          </option>
                          {drivers.map((driver, index) => {
                              return(
                                  <option
                                  key={index}
                                    className={styles.select_form_option}
                                    value={driver.email}
                                  >
                                    {driver.first_name + " " + driver.last_name}
                                  </option>
                              )
                          })}

                        </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

               </Modal.Body>

               <Modal.Footer className="edit-modal-footer">
                 <Button
                   variant="secondary"
                   className="edit-modal-close-button"
                   onClick={close_modal}
                 >
                   Close
                 </Button>
                 <Button variant="primary" className="edit-modal-save-button" onClick={(e) => onEditTruckHelper(e)}>
                   Save changes
                 </Button>
               </Modal.Footer>

            </Modal>
        </div>
    );
}

export default EditTruckModal;
