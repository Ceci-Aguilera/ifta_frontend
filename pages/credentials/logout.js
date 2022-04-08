import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useAuth } from "../../context/AuthContext";
import {useEffect, useState} from "react"


export default function Logout() {

    const {logout } = useAuth();

    useEffect(() => {
        logout();
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Logout</title>
        <meta name="description" costent="IFTA ya! Logout" />
      </Head>

      <main className={styles.main}>

      </main>
    </div>
  )
}
