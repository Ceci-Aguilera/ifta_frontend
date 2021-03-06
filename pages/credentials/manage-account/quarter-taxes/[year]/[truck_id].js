import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../../../styles/QuarterTaxes.module.css";
import NextNavbar from "../../../../../components/Navbar";

import { useAuth } from "../../../../../context/AuthContext";
import { useTrucks } from "../../../../../context/TrucksContext";
import { AlertDanger } from "../../../../../components/Alerts"

import { useEffect, useState } from "react";

import axios from "axios"
import Link from "next/link";


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME


export default function QuarterTaxes({ year, truck_id }) {

    const { user, token } = useAuth();
    const { trucks } = useTrucks();

    const [quarters, setQuarters] = useState(null);


    useEffect(() => {
        if (year != null && year != undefined && truck_id != null && truck_id != undefined && token != null && token != undefined) {
            async function FetchQuarters() {

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                };


                const trucks_url = `${domain}/quarter-taxes/taxes-report/${year}/${truck_id}`
                axios.get(trucks_url, config).then(async (res) => {
                    const result = await res.data

                    result.sort((a, b) => parseInt(a.number) - parseInt(b.number));

                    setQuarters(result);
                }).catch((error) => {
                    console.log(error)
                })
            }
            FetchQuarters();
        }
    }, [year, truck_id, token])


    return (user == null || quarters == null) ? <div></div> : (
        <div className={styles.container}>
            <Head>
                <title>IFTA ya! Quarters Reports</title>
                <meta name="description" content="IFTA ya! sections that shows resume of quarter reports for a selected truck" />
            </Head>

            <NextNavbar />

            {new Date().valueOf() > new Date(user.paid_until).valueOf() ? <div className={styles.quarter_taxes_alert_div}>
                <AlertDanger error={"Account Inactive"} error_description={"Account is inactive as this quarter has not been purchased. To buy the service for this quarter go to Payment."} />
            </div> : <div></div>}

            <main className={styles.main}>
                <div className={styles.trucks_info_div}>
                    {(trucks !== null) ? (
                        <div>
                            <div className={styles.quarter_taxes_filter_div}>

                            </div>
                            <Card className={styles.quarter_taxes_table_card}>
                                <Card.Header className={styles.quarter_taxes_table_card_header}>
                                    <Row className={styles.quarter_taxes_table_card_header_row}>
                                        <Col xs={3} sm={3} md={3} lg={3} className={styles.quarter_taxes_table_card_header_col}>
                                            <span className={styles.quarter_taxes_table_card_header_span}>
                                                QUARTER
                                            </span>
                                        </Col>

                                        <Col xs={2} sm={2} md={2} lg={2} className={styles.quarter_taxes_table_card_header_col}>
                                            <span className={styles.quarter_taxes_table_card_header_span}>
                                                MILES
                                            </span>
                                        </Col>

                                        <Col xs={2} sm={2} md={2} lg={2} className={styles.quarter_taxes_table_card_header_col}>
                                            <span className={styles.quarter_taxes_table_card_header_span}>
                                                GALLONS
                                            </span>
                                        </Col>

                                        <Col xs={2} sm={2} md={2} lg={2} className={styles.quarter_taxes_table_card_header_col}>
                                            <span className={styles.quarter_taxes_table_card_header_span}>
                                                MPG
                                            </span>
                                        </Col>

                                        <Col xs={2} sm={2} md={2} lg={2} className={styles.quarter_taxes_table_card_header_col}>
                                            <span className={styles.quarter_taxes_table_card_header_span}>
                                                IFTA TAXES
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Header>

                                {new Date().valueOf() > new Date(user.paid_until).valueOf() ? <div></div> :

                                    <Card.Body className={styles.trucks_info_table_card_body}>

                                        {quarters == null ? <div></div> :
                                            <div>
                                                {quarters.map((quarter, index) => {
                                                    return (
                                                        <Link key={index} href={`${domain}/staff/ifta-tax-report/${user.email}/${truck_id}/${year}/${quarter.number}`}>

                                                            <Card className={styles.quarter_taxes_card}>
                                                                <Card.Body className={styles.trucks_info_card_body}>
                                                                    <Row className={`${styles.quarter_taxes_table_card_row}`}>
                                                                        <Col xs={12} sm={12} md={12} lg={3} className={styles.quarter_taxes_table_card_col}>

                                                                            {(index == quarters.length - 1) ?
                                                                                <span className={styles.quarter_taxes_table_card_span_red}>
                                                                                    QUARTER {quarter.number}
                                                                                </span> :
                                                                                <span className={styles.quarter_taxes_table_card_span}>
                                                                                    QUARTER {quarter.number}
                                                                                </span>}
                                                                        </Col>

                                                                        <Col xs={12} sm={12} md={12} lg={2} className={styles.quarter_taxes_table_card_col}>
                                                                            {(index == quarters.length - 1) ?
                                                                                <span className={styles.quarter_taxes_table_card_span_red}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        TOLL MILES
                                                                                    </span>     {quarter.toll_miles}
                                                                                </span> :
                                                                                <span className={styles.quarter_taxes_table_card_span}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        TOLL MILES
                                                                                    </span>      {quarter.toll_miles}
                                                                                </span>}
                                                                        </Col>

                                                                        <Col xs={12} sm={12} md={12} lg={2} className={styles.quarter_taxes_table_card_col}>
                                                                            {(index == quarters.length - 1) ?
                                                                                <span className={styles.quarter_taxes_table_card_span_red}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        GALLONS:
                                                                                    </span>    {quarter.fuel_gallons}
                                                                                </span> :
                                                                                <span className={styles.quarter_taxes_table_card_span}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        GALLONS:
                                                                                    </span>                    {quarter.fuel_gallons}
                                                                                </span>}
                                                                        </Col>

                                                                        <Col xs={12} sm={12} md={12} lg={2} className={styles.quarter_taxes_table_card_col}>
                                                                            {(index == quarters.length - 1) ?
                                                                                <span className={styles.quarter_taxes_table_card_span_red}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        MPG
                                                                                    </span>           {quarter.mpg}
                                                                                </span> :
                                                                                <span className={styles.quarter_taxes_table_card_span}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        MPG
                                                                                    </span>            {quarter.mpg}
                                                                                </span>}
                                                                        </Col>

                                                                        <Col xs={12} sm={12} md={12} lg={2} className={styles.quarter_taxes_table_card_col}>
                                                                            {(index == quarters.length - 1) ?
                                                                                <span className={styles.quarter_taxes_table_card_span_red}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        IFTA TAXES
                                                                                    </span>                        ${parseFloat(quarter.fuel_tax_owned).toFixed(2)}
                                                                                </span> :
                                                                                <span className={styles.quarter_taxes_table_card_span}>
                                                                                    <span className={styles.drivers_info_div_card_header_span}>
                                                                                        IFTA TAXES
                                                                                    </span>                      ${parseFloat(quarter.fuel_tax_owned).toFixed(2)}
                                                                                </span>}
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>

                                                    )
                                                })}
                                            </div>
                                        }

                                    </Card.Body>
                                }
                            </Card>
                        </div>
                    )
                        : <div></div>}


                </div>

            </main>
        </div>
    );
}


QuarterTaxes.getInitialProps = async ({ query }) => {
    const { year, truck_id } = query;

    return { year, truck_id };
};