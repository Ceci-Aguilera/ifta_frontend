import styles from "../styles/Navbar.module.css";

import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";

import ifta_logo from "../public/logos/ifta-logo-dark.svg"

export default function NextNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={styles.navbar}>
      <Container className={styles.container}>
        <Navbar.Brand href="#home"  className={styles.navbar_brand}>
          <Image
            src={ifta_logo}
            alt="Ifta Now Logo"
            className={styles.ifta_logo_img}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/credentials/manage-account/account-info" className={styles.link}>Company</Nav.Link>
            <Nav.Link href="/credentials/manage-account/trucks-info" className={styles.link}>Truck</Nav.Link>
            <Nav.Link href="/credentials/manage-account/drivers-info" className={styles.link}>Driver</Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>Payment</Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>Reports</Nav.Link>
            <Nav.Link href="/credentials/logout" className={styles.link}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
