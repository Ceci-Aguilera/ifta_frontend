import { Card, Col, Row, Container, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import ResetPasswordComponent from "../../../../components/ResetPassword";
import styles from "../../../../styles/Login.module.css"


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const ResetPassword = ({ uid, token }) => {
  return(
    <div className={styles.div}>
        <ResetPasswordComponent uid={uid} token={token}/>
    </div>
  );
};

ResetPassword.getInitialProps = async ({ query }) => {
  const { uid, token } = query;

  return { uid, token };
};


export default ResetPassword;