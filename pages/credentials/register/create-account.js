import Head from 'next/head'
import Image from 'next/image'
import CreateAccount from '../../../components/CreateAccount'
import styles from '../../../styles/Home.module.css'
import { useAuth } from "../../../context/AuthContext";


export default function CreateAccountFunction() {

    const { auth, user, register } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Register</title>
        <meta name="description" costent="IFTA ya! Register" />
      </Head>

      <main className={styles.main}>
        <CreateAccount register={register}/>
      </main>
    </div>
  )
}
