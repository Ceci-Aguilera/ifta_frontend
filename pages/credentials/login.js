import Head from 'next/head'
import Image from 'next/image'
import Login from '../../components/Login'
import styles from '../../styles/Home.module.css'
import { useAuth } from "../../context/AuthContext";


export default function LoginFunction() {

    const { auth, user, login } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" costent="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login login={login}/>
      </main>
    </div>
  )
}