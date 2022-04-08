import Head from 'next/head'
import Image from 'next/image'
import CreateAccountTruck from '../../../components/CreateAccountTruck'
import NextNavbar from '../../../components/Navbar'
import styles from '../../../styles/Home.module.css'


export default function CreateTruckFunction() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Create Truck</title>
        <meta name="description" costent="IFTA ya! section to create a truck" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>
        <CreateAccountTruck />
      </main>
    </div>
  )
}