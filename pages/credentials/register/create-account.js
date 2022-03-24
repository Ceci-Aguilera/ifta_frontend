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
        <title>Create Next App</title>
        <meta name="description" costent="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CreateAccount register={register}/>
      </main>
    </div>
  )
}
