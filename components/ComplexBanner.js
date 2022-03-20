import styles from "../styles/ComplexBanner.module.css";

import complex_banner_img from "../public/images/Trcuk Driver Banner.svg";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import mini_phone from "../public/images/phonecito.png";

export default function ComplexBanner() {
  return (
    <div className={styles.complex_banner_div}>
      <div className={styles.complex_banner_background_div}>
        <Image
          src={complex_banner_img}
          alt="Ifta App Idea"
          className={styles.complex_banner_div_img}
          layout="responsive"
        />

        <div className={styles.over_div}>
          <Row className={styles.row}>
            <Col xs={6} sm={6} md={6} lg={6} class={styles.col}>
              <p className={styles.complex_banner_tag_p}>Out Promise</p>
              <h2 className={styles.complex_banner_h2}>Ready to try it out?</h2>
              <div className={styles.complex_banner_p_div}>
                <p className={styles.complex_banner_p}>
                  This App is designed for owner operators by an experienced
                  driver on the road. It’s a simple way to keep track of your
                  miles and gallons, and update your records instantly
                </p>
              </div>

              <div className={styles.mini_phone_img_div}>
                <Image
                  src={mini_phone}
                  alt="Ifta Phone App"
                  className={styles.complex_banner_div_img}
                  height={"200"}
                  width={"100"}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
