import Head from 'next/head'
import Image from 'next/image'
import CreateDriver from '../../../components/CreateDriver'
import styles from '../../../styles/Home.module.css'


export default function CreateDriverFunction() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Create Driver</title>
        <meta name="description" costent="IFTA ya! section to create a new driver" />
      </Head>

      <main className={styles.main}>
        <CreateDriver />
      </main>
    </div>
  )
}