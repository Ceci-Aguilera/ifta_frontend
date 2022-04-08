import Head from 'next/head'
import Image from 'next/image'
import Login from '../../components/Login'
import styles from '../../styles/Home.module.css'
import { useAuth } from "../../context/AuthContext";


export default function LoginFunction() {

    const {login } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Login</title>
        <meta name="description" costent="IFTA ya! Login" />
      </Head>

      <main className={styles.main}>
        <Login login={login}/>
      </main>
    </div>
  )
}
