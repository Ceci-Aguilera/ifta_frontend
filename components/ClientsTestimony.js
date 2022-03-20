import styles from "../styles/ClientsTestimony.module.css";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Image from "next/image";

import client_image from "../public/images/Client.jpeg"
import loading_icon from "../public/icons/Loading.svg"

export default function ClientsTestimony() {
  return (
    <div className={styles.clients_testimony_div}>
      <h2 className={styles.clients_testimony_h2}>Our client says</h2>

      <Row className={styles.clients_testimony_row}>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className={styles.clients_testimony_col}
        >
          <Card className={styles.clients_testimony_card}>
            <Card.Header className={styles.clients_testimony_card_header}>
              <div className={styles.clients_testimony_card_img_div}>
                <Image src={client_image} alt="Client Testimony" width="125" height="125" className={styles.clients_testimony_card_img} />
              </div>
            </Card.Header>

            <Card.Body className={styles.clients_testimony_card_body}>
              <Card.Title className={styles.clients_testimony_card_title}>
                John Francis
              </Card.Title>

              <p className={styles.clients_testimony_card_p}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since`}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className={styles.clients_testimony_col}
        >
          <Card className={styles.clients_testimony_card}>
            <Card.Header className={styles.clients_testimony_card_header}>
              <div className={styles.clients_testimony_card_img_div}>
                <Image src={client_image} alt="Client Testimony" width="125" height="125" className={styles.clients_testimony_card_img} />
              </div>
            </Card.Header>

            <Card.Body className={styles.clients_testimony_card_body}>
              <Card.Title className={styles.clients_testimony_card_title}>
                John Francis
              </Card.Title>

              <p className={styles.clients_testimony_card_p}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since`}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className={styles.clients_testimony_col}
        >
          <Card className={styles.clients_testimony_card}>
            <Card.Header className={styles.clients_testimony_card_header}>
              <div className={styles.clients_testimony_card_img_div}>
                <Image src={client_image} alt="Client Testimony" width="125" height="125" className={styles.clients_testimony_card_img} />
              </div>
            </Card.Header>

            <Card.Body className={styles.clients_testimony_card_body}>
              <Card.Title className={styles.clients_testimony_card_title}>
                John Francis
              </Card.Title>

              <p className={styles.clients_testimony_card_p}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since`}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className={styles.loading_div}>
      <Image src={loading_icon} alt="Loading Icon" width="50" height="50" className={styles.clients_testimony_loading_icon} />
      </div>
    </div>
  );
}
