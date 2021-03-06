import { Button, Row, Col, Container, Card, Form } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/QuarterTaxes.module.css";

import axios from "axios";

import NextNavbar from "../../../components/Navbar";

import { useAuth } from "../../../context/AuthContext";

import { useEffect, useState } from "react";
import Link from "next/link";

import { TruckFront } from "../../../components/Icons"



const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]

const current_date = new Date().getFullYear()


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME



export default function TaxesTruckYear() {

  const { user, token } = useAuth();

  const [year, setYear] = useState("None");

  const [tax_trucks, setTaxTrucks] = useState(null);

  useEffect(() => {
    if (year != "None") {
      async function FetchTrucks() {

        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        };


        const trucks_url = `${domain}/quarter-taxes/taxes-truck-year/${year}`
        axios.get(trucks_url, config).then(async (res) => {
          const result = await res.data
          setTaxTrucks(result);
        })
      }
      FetchTrucks();
    }
  }, [year, token])


  return (user == null) ? <div></div> : (
    <div className={styles.container}>
      <Head>
        <title>IFTA ya! Select Year and Truck for Taxes</title>
        <meta name="description" content="IFTA ya! section to select a year and a truck to calculate IFTA Taxes" />
      </Head>

      <NextNavbar />

      <main className={styles.main}>
        <div className={styles.taxes_truck_year_info_div}>
          <Form.Group className={`mb-3 ${styles.form_group}`}>
            <Form.Select
              size="lg"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={styles.form_control}
            >
              <option
                className={styles.select_form_option}
                value="None"
              >
                Year
              </option>

              {years.map((temp_year, index) => {
                if (current_date >= parseInt(temp_year)) {

                  return (
                    <option
                      key={index}
                      className={styles.select_form_option}
                      value={temp_year}
                    >
                      {temp_year}
                    </option>
                  )
                }
              })}
            </Form.Select>
          </Form.Group>

          {tax_trucks == null ? <div></div> :
            (
              <div>
                {tax_trucks.map((tax_truck, index) => {
                  return (
                    <Link key={index} href={`/credentials/manage-account/quarter-taxes/${year}/${tax_truck.id}`}>
                      <a className={styles.tax_truck_a}>
                        <div className={styles.tax_truck_div}>
                          <TruckFront height={100} width={100} className={styles.tax_truck_icon} /> <p className={styles.tax_truck_p}>
                            <span className={styles.tax_truck_span}>
                              Plate:
                            </span>
                            {tax_truck.license_plate_no}
                          </p>
                        </div>
                      </a>
                    </Link>
                  )
                })}

              </div>
            )
          }


        </div>

      </main>
    </div>
  );
}
