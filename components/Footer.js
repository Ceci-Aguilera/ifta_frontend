import styles from "../styles/Footer.module.css";

import facebook_icon from "../public/icons/Facebook Red.svg"
import instagram_icon from "../public/icons/Instagram Icon.svg"
import youtube_icon from "../public/icons/Youtube Icon.svg"

import { Col, Row } from "react-bootstrap";
import Image from "next/image";

export default function NextFooter() {
    return(
        <footer className={styles.footer}>
            <p className={styles.footer_p}>
                Follow us in
            </p>

            <Row className={styles.footer_row}>
                <Col xs={4} sm={4} md={4} lg={4} className={styles.footer_col}>
                    <Image src={facebook_icon} height={50} width={50} alt="Facebook Red Icon" />
                </Col>

                <Col xs={4} sm={4} md={4} lg={4} className={styles.footer_col}>
                    <Image src={instagram_icon} height={50} width={50} alt="Instagram Red Icon" />
                </Col>

                <Col xs={4} sm={4} md={4} lg={4} className={styles.footer_col}>
                    <Image src={youtube_icon} height={50} width={50} alt="Youtube Red Icon" />
                </Col>
            </Row>

        <div className={styles.footer_dev_div}>
            <p className={styles.footer_dev_p}>
                <span className={styles.footer_dev_span}>
                Developed by:
                </span>{" "}
                 Cecilia Fernandez Aguilera
            </p>
        </div>
        </footer>
    );
};
