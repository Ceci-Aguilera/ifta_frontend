import styles from "../styles/PresentationBanner.module.css";

import presentation_banner_img from "../public/images/Background.svg";
import Image from "next/image";
import Link from "next/link";

import phone_middle_img from "../public/images/phone middle.png";
import iphone_icon from "../public/icons/apple-logo.png";
import android_icon from "../public/icons/android-logo.png";
import ifta_logo from "../public/logos/ifta-logo.png";

import login_icon from "../public/icons/Login.png";

import { Col, Row } from "react-bootstrap";

export default function PresentationBanner() {
  return (
    <div className={styles.banner_div}>
      <div className={styles.background_div}>
        <Image
          src={presentation_banner_img}
          alt="Ifta App"
          className={styles.banner_div_img}
        />

        <div className={styles.over_div}>
          <Row className={styles.banner_row}>
            <Col xs={12} sm={12} md={12} lg={6} className={styles.banner_col}>
              <div className={styles.banner_col_wrapper}>
              <div className={styles.banner_logo_image_div}>

                <Image
                  src={ifta_logo}
                  alt="Ifta Now Logo"
                  className={styles.ifta_logo_img}
                  // width={250}
                  // height={100}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

                <h2 className={styles.banner_h2}>
                  Save time and money with our APP
                </h2>

                <div className={styles.spacer} />

              <Link href="/credentials/login">

                <Image
                  src={login_icon}
                  alt="Login Icon"
                  className={styles.banner_login_icon}
                  width={100}
                  height={100}
                />
              </Link>

              <Row className={`${styles.app_row} ${styles.app_row_second}`}>
                <Col xs={6} sm={6} md={6} lg={6} className={styles.app_col}>
                  <Image
                    src={iphone_icon}
                    alt="Ifta IPhone App"
                    className={styles.iphone_icon_img}
                  />
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} className={styles.app_col}>
                  <Image
                    src={android_icon}
                    alt="Ifta Android App"
                    className={styles.iphone_icon_img}
                  />
                </Col>
              </Row>
              </div>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className={`${styles.banner_col} ${styles.banner_app_col}`}
            >
              <Row className={styles.app_row}>
                <Col xs={6} sm={6} md={6} lg={6} className={styles.app_col}>
                  <Image
                    src={iphone_icon}
                    alt="Ifta IPhone App"
                    className={styles.iphone_icon_img}
                  />
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} className={styles.app_col}>
                  <Image
                    src={android_icon}
                    alt="Ifta Android App"
                    className={styles.iphone_icon_img}
                  />
                </Col>
              </Row>

              <Row className={styles.download_app_row}>
                <p className={styles.download_app_row_p}>Download the App</p>
              </Row>

              <Row className={styles.phone_middle_row}>
                <div className={styles.phone_middle_div}>
                  <Image
                    src={phone_middle_img}
                    alt="Ifta Phone App"
                    className={styles.phone_middle_img}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
