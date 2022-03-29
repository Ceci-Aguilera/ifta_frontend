import { Button, Row, Col, Container, Card, Table } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../../../../styles/QuarterTaxesReport.module.css";
import NextNavbar from "../../../../../../components/Navbar";

import { useAuth } from "../../../../../../context/AuthContext";

import { useEffect, useState } from "react";

import axios from "axios"


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME


export default function QuarterTaxesReport({ year, truck_id, quarter_number }) {

    const {user, token} = useAuth();

    const [taxes, setTaxes] = useState(null);
    const [state_reports, setStateReports] = useState(null);


    useEffect(() => {
        if (year != null && year != undefined && truck_id != null && truck_id != undefined) {
            async function fetchTaxes() {

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                };


                const trucks_url = `${domain}/quarter-taxes/taxes-report/${year}/${truck_id}/${quarter_number}`
                axios.get(trucks_url, config).then(async (res) => {
                    const result = await res.data
                    setTaxes(result);
                }).catch((error) => {
                    console.log(error)
                })
            }

            async function fetchStateReports() {

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                };


                const trucks_url = `${domain}/quarter-taxes/taxes-report/states-reports/${year}/${truck_id}/${quarter_number}`
                axios.get(trucks_url, config).then(async (res) => {
                    const result = await res.data
                    setStateReports(result);
                }).catch((error) => {
                    console.log(error)
                })
            }

            fetchTaxes();
            fetchStateReports();
        }
    }, [year, truck_id, quarter_number, token])

    console.log(taxes)

    return (user == null || taxes == null || state_reports == null) ? <div>Error</div> : (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NextNavbar />

            <main className={styles.main}>
                <div className={styles.trucks_info_div}>
                    <div className={styles.div}>
                        <div className={styles.table_main_div}>
                            <Table variant="light" striped bordered hover responsive='md' className={styles.table}>
                                <thead className={styles.table_thead}>
                                    <tr className={styles.table_tr}>
                                        <th className={styles.table_th}>#</th>
                                        <th className={styles.table_th}>State</th>
                                        <th className={styles.table_th}>Total Taxable Miles</th>
                                        <th className={styles.table_th}>Total Non Taxable Miles</th>
                                        <th className={styles.table_th}>Total Taxable Gallons</th>
                                        <th className={styles.table_th}>Total Tax Paid Gallons</th>
                                        <th className={styles.table_th}>Total Owned</th>
                                    </tr>
                                </thead>

                                <tbody className={styles.table_tb}>
                                    {state_reports.map((state_report, index) => {
                                        return (
                                            <tr className={styles.table_tr} key={index}>
                                                <td className={styles.table_td}>{index + 1}</td>
                                                <td className={styles.table_td}>
                                                    {state_report.usa_state.replace('USAState.', '')}
                                                </td>
                                                <td className={styles.table_td}>
                                                    {state_report.toll_miles}
                                                </td>
                                                <td className={styles.table_td}>
                                                    {state_report.non_toll_miles}
                                                </td>
                                                <td className={styles.table_td}>
                                                    {parseFloat(
                                                        state_report.toll_miles / taxes.mpg
                                                    ).toFixed(2)}
                                                </td>
                                                <td className={styles.table_td}>
                                                    {state_report.fuel_gallons}
                                                </td>
                                                <td
                                                    className={styles.table_td}
                                                    style={{
                                                        color:
                                                            parseFloat(state_report.fuel_tax_owned).toFixed(2) > 0
                                                                ? "#d9534f"
                                                                : "#5cb85c",
                                                    }}
                                                >
                                                    {parseFloat(state_report.fuel_tax_owned).toFixed(2)}
                                                </td>
                                            </tr>
                                        );
                                    })}

                                    <tr className={styles.table_tr}>
                                        <td className={styles.table_td}>{state_reports.length + 1}</td>
                                        <td className={styles.table_td}>Total</td>
                                        <td className={styles.table_td}>{taxes.toll_miles}</td>
                                        <td className={styles.table_td}>{taxes.non_toll_miles}</td>
                                        <td className={styles.table_td}></td>
                                        <td className={styles.table_td}>{taxes.fuel_gallons}</td>
                                        <td
                                            className={styles.table_td}
                                            style={{
                                                color:
                                                    parseFloat(taxes.fuel_tax_owned).toFixed(2) > 0
                                                        ? "#d9534f"
                                                        : "#5cb85c",
                                            }}
                                        >
                                            {parseFloat(taxes.fuel_tax_owned).toFixed(2)}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div className={styles.buttons_div}>
                            {/* <div className={styles.print_button_div}>
          <Button variant="success" className={styles.print_button}>
            Print
          </Button>
        </div> */}

                            <div className={styles.save_pdf_button_div}>
                                <Button variant="danger" className={styles.save_pdf_button} onClick={(e) => sendTaxesPDF(truck_id, id)}>
                                    Send PDF
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}


QuarterTaxesReport.getInitialProps = async ({ query }) => {
    const { year, truck_id, quarter_number } = query;

    return { year, truck_id, quarter_number };
};