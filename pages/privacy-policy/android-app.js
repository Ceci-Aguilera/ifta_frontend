import { Button, Row, Col, Container, Table } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/PrivacyPolicy.module.css";


export default function PrivacyPolicyAndroidApp() {


    return (
        <div className={styles.container}>
            <Head>
                <title>IFTA ya! Privacy Policy</title>
                <meta name="description" content="IFTA ya! android app privacy policy " />
            </Head>

            <main className={styles.main}>

                <div className={styles.privacy_notice_div}>


                    <h1 className={styles.privacy_notice_section_header_title}>
                        PRIVACY NOTICE
                    </h1>

                    <p className={styles.p}>
                        <span className={styles.span}>
                            Last updated
                        </span>{" "}
                        04/11/2022
                    </p>

                    <div className={styles.privacy_notice_paragraph}>
                        <p className={styles.p}>
                            This privacy notice for the mobile application <span className={styles.span}>IFTA ya!</span>, describes how and why we might collect, store, use, and/or share (<span className={styles.span}>
                                process
                            </span>
                            ) your information when you use our services (<span className={styles.span}>Services</span>), such as when you:
                            <ul>
                                <li>Download or use our mobile application (IFTA ya!)</li>
                            </ul>

                            <span className={styles.span}>
                                Questions or concerns?
                            </span>{" "}
                            Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at service@ifta-ya.com.
                        </p>
                    </div>

                    <h2 className={styles.privacy_notice_section_header_title}>
                        SUMMARY OF THE KEY POINTS
                    </h2>

                    <div className={styles.privacy_notice_paragraph}>
                        <p className={styles.p}>
                            <span className={styles.span}>
                                This summary provides key points from our privacy notice, but you can find out more details about any of these topics in their corresponding section.
                            </span>
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                What personal information do we process?
                            </span>{" "}
                            When you visit, use, or navigate our Services, we may process personal information depending on how you interact with the Services, the choices you make, and the products and features you use.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                Do we process any sensitive personal information?
                            </span>{" "}
                            We do not process sensitive personal information.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                Do we receive any information from third parties?
                            </span>{" "}
                            We may receive information from public databases, marketing partners, social media platforms, and other outside sources.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                How do we process your information?
                            </span>{" "}
                            We process your information to provide, improve, and administer out Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. 
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In what situations and with which types of parties do we share personal information?
                            </span>{" "}
                            We may share information in specific situations and with specific categories of third parties.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                How do we keep your information safe?
                            </span>{" "}
                            We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                What are your rights?
                            </span>{" "}
                            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. 
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                How do I exercise my rights?
                            </span>{" "}
                            The easiest way to exercise your rights is by filling out our data subject request form available here: <Link href={"https://www.ifta-ya.com/credentials/manageaccount/account-info"}>https://www.ifta-ya.com/credentials/manageaccount/account-info</Link>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.  </p>


                    </div>

                    

                    <h2 className={styles.privacy_notice_section_header_title}>
                        1. WHAT INFORMATION DO WE COLLECT?
                    </h2>

                    <h3>
                        Personal information you disclose to us
                    </h3>


                    <div className={styles.privacy_notice_paragraph}>
                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            We collect personal information that you provide to us.
                        </p>

                        <p className={styles.p}>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                Personal Information Provided by You.
                            </span>{" "}
                            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            <ul>
                                <li>email addresses</li>
                                <li>job titles</li>
                                <li>passwords</li>
                            </ul>
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                Sensitive Information.
                            </span>{" "}
                            We do not process sensitive information.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                Application Data.
                            </span>{" "}
                            If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                            <ul>
                                <li><span className={styles.span_italic}>Mobile Device Access.</span> We may request access or permission to certain features from your mobile device, including your mobile {"device's"} storage, and other features. If you wish to change our access or permissions, you may do so in your {"device's"} settings.</li>
                                <li><span className={styles.span_italic}>Mobile Device Data.</span> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile {"device's"} operating system or platform, the type of mobile device you use, your mobile {"device's"} unique device ID, and information about the features of our application(s) you accessed.</li>
                            </ul>
                        </p>

                        <p className={styles.p}>
                            This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                        </p>

                        <p className={styles.p}>
                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                        </p>


                        <h3>
                            Information automatically collected
                        </h3>


                        <div className={styles.privacy_notice_paragraph}>

                            <p className={styles.p}>
                                <span className={styles.span}>
                                    In Short:
                                </span>{" "}
                                Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                            </p>

                            <p className={styles.p}>
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                            </p>

                            <p className={styles.p}>
                                Like many businesses, we also collect information through cookies and similar technologies.
                            </p>

                            <p className={styles.p}>
                                The information we collect includes:
                                <ul>
                                    <li><span className={styles.span_italic}>Log and Usage Data.</span> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called crash dumps), and hardware settings).
                                    </li>
                                </ul>
                            </p>

                        </div>

                        <h3>
                            Information collected from other sources
                        </h3>


                        <div className={styles.privacy_notice_paragraph}>

                            <p className={styles.p}>
                                <span className={styles.span}>
                                    In Short:
                                </span>{" "}
                                We may collect limited data from public databases, marketing partners, and other outside sources.
                            </p>

                            <p className={styles.p}>
                                In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone,  numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
                            </p>

                        </div>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            2. HOW DO WE PROCESS YOUR INFORMATION?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span className={styles.span_italic}>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                            </span>
                        </p>

                        <span className={styles.span}>
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                        </span>

                        <ul>
                            <li><span className={styles.span}>To deliver and facilitate delivery of services to the user.</span> We may process your information to provide you with the requested service.
                            </li>

                            <li><span className={styles.span}>To respond to user inquiries/offer support to users.</span> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                            </li>

                            <li><span className={styles.span}>To send administrative information to you.</span> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                            </li>

                            <li><span className={styles.span}>To request feedback.</span> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                            </li>

                            <li><span className={styles.span}>To protect our Services.</span> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                            </li>

                            <li><span className={styles.span}>To comply with our legal obligations.</span> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                            </li>
                        </ul>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span className={styles.span_italic}>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                            </span>
                        </p>

                        <h3>
                            If you are located in Canada, this section applies to you.
                        </h3>





                        <p className={styles.p}>
                            We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click here to learn more.
                            In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                            <ul>
                                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                                <li>For investigations and fraud detection and prevention</li>
                                <li>For business transactions provided certain conditions are met</li>
                                <li> If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                                <li>If the information is publicly available and is specified by the regulations</li>
                            </ul>

                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span>We may share information in specific situations described in this section and/or with the following categories of third parties.</span>
                        </p>



                        <p className={styles.p}>
                            Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents (third parties) who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:
                            <ul>
                                <li>Cloud Computing Services</li>
                                <li>Data Analytics Services</li>
                                <li>Data Storage Service Providers</li>
                                <li>Testing Tools</li>
                                <li>User Account Registration & Authentication Services</li>
                                <li>Website Hosting Service Providers</li>
                            </ul>

                            We also may need to share your personal information in the following situations:
                            <ul>
                                <li><span className={styles.span}>Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any
                                    merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>

                                <li><span className={styles.span}>Affiliates.</span> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>

                                <li><span className={styles.span}>Business Partners.</span> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                            </ul>

                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> We may use cookies and other tracking technologies to collect and store your information.</span>
                        </p>

                        <p className={styles.p}>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            6. HOW LONG DO WE KEEP YOUR INFORMATION?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</span>
                        </p>

                        <p className={styles.p}>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
                        </p>

                        <p className={styles.p}>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> We aim to protect your personal information through a system of organizational and technical security measures.</span>
                        </p>

                        <p className={styles.p}>
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            8. DO WE COLLECT INFORMATION FROM MINORS?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> We do not knowingly collect data from or market to children under 18 years of age.</span>
                        </p>

                        <p className={styles.p}>
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor {"dependent's"} use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at service@ifta-ya.com.
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            9. WHAT ARE YOUR PRIVACY RIGHTS?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</span>
                        </p>

                        <p className={styles.p}>
                            In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below.
                        </p>

                        <p className={styles.p}>
                            We will consider and act upon any request in accordance with applicable data protection laws.
                        </p>

                        <p className={styles.p}>
                            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index en.htm.
                        </p>

                        <p className={styles.p}>
                            If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>Withdrawing your consent:</span>  If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section: HOW CAN YOU CONTACT US ABOUT THIS NOTICE? below.
                        </p>

                        <p className={styles.p}>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}>Cookies and similar technologies:</span> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.
                        </p>

                        <p className={styles.p}>
                            If you have questions or comments about your privacy rights, you may email us at service@ifta-ya.com.
                        </p>


                        <h2 className={styles.privacy_notice_section_header_title}>
                            10. CONTROLS FOR DO-NOT-TRACK FEATURES
                        </h2>

                        <p className={styles.p}>
                            <span>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (DNT) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically com choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                            </span>
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </h2>

                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</span>
                        </p>

                        <p className={styles.p}>
                            California Civil Code Section 1798.83, also known as the Shine The Light law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                        </p>

                        <p className={styles.p}>
                            If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                        </p>

                        <h3>
                            CCPA Privacy Notice
                        </h3>

                        <p className={styles.p}>
                            The California Code of Regulations defines a resident as:
                            <ul>
                                <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                                <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
                            </ul>

                            All other individuals are defined as non-residents.
                        </p>

                        <p className={styles.p}>
                            If this definition of resident applies to you, we must adhere to certain rights and obligations regarding your personal information.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}> What categories of personal information do we collect?</span>
                        </p>

                        <p className={styles.p}>
                            We have collected the following categories of personal information in the past twelve (12) months:
                        </p>

                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Examples</th>
                                    <th>Collected</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A. Identifiers</td>
                                    <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <td>B. Personal information categories listed in the California Customer Records statute</td>
                                    <td>Name, contact information, education, employment, employment history, and financial information</td>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <td>C. Protected classification characteristics under California or federal law</td>
                                    <td>Gender and date of birth</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td>D. Commercial information</td>
                                    <td>Transaction information, purchase history, financial details, and payment information</td>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <td>E. Biometric information</td>
                                    <td>Fingerprints and voiceprints</td>
                                    <td>NO</td>
                                </tr>

                                <tr>
                                    <td>F. Internet or other similar network activity</td>
                                    <td>Browsing history, search history, online behavior, interest data, F. Internet or other similar network activity and interactions with our and other websites, applications, systems, and advertisements</td>
                                    <td>NO</td>
                                </tr>

                                <tr>
                                    <td>G. Geolocation data</td>
                                    <td>Device location</td>
                                    <td>NO</td>
                                </tr>

                                <tr>
                                    <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                                    <td>Images and audio, video or call recordings created in connection with our business activities</td>
                                    <td>NO</td>
                                </tr>

                                <tr>
                                    <td>I. Professional or employment-related information</td>
                                    <td>Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                    <td>YES</td>
                                </tr>

                                <tr>
                                    <td>J. Education Information</td>
                                    <td>Student records and directory information</td>
                                    <td>NO</td>
                                </tr>

                                <tr>
                                    <td>K. Inferences drawn from other personal information</td>
                                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an {"individual's"} preferences and characteristics</td>
                                    <td>NO</td>
                                </tr>
                            </tbody>
                        </Table>


                        <p className={styles.p}>
                            We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
                            <ul>
                                <li>
                                    Receiving help through our customer support channels;
                                </li>

                                <li>
                                    Participation in customer surveys or contests; and
                                </li>

                                <li>
                                    Facilitation in the delivery of our Services and to respond to your inquiries.
                                </li>
                            </ul>
                        </p>


                        <p className={styles.p}>
                            <span className={styles.span}>How do we use and share your personal information?</span>
                        </p>

                        <p className={styles.p}>
                            More information about our data collection and sharing practices can be found in this privacy notice.
                        </p>

                        <p className={styles.p}>
                            You may contact us by email at service@ifta-ya.com, or by referring to the contact details at the bottom of this document.
                        </p>

                        <p className={styles.p}>
                            If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf
                        </p>



                        <p className={styles.p}>
                            <span className={styles.span}>Will your information be shared with anyone else?</span>
                        </p>

                        <p className={styles.p}>
                            We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
                        </p>

                        <p className={styles.p}>
                            We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be selling of your personal information.
                        </p>

                        <p className={styles.p}>
                            The mobile application IFTA ya! has not sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. The mobile application IFTA ya!  has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:

                            <ul>
                                <li>
                                    Category A. Identifiers, such as contact details, like your real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.
                                </li>

                                <li>
                                    Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.
                                </li>

                                <li>
                                    Category D. Commercial information, such as transaction information, purchase history, financial details, and payment information.
                                </li>

                                <li>
                                    Category I. Professional or employment-related information, such as business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us.
                                </li>
                            </ul>

                        </p>


                        <p className={styles.p}>
                            The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?.
                        </p>

                        <p className={styles.p}>
                            <span className={styles.span}> Your rights with respect to your personal data</span>
                        </p>

                        <p className={styles.p}>
                            Right to request deletion of the data — Request to delete
                        </p>

                        <p className={styles.p}>
                            You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
                        </p>

                        <p className={styles.p}>
                            Right to be informed — Request to know
                        </p>

                        <p className={styles.p}>
                            Depending on the circumstances, you have a right to know:
                            <ul>
                                <li>
                                    whether we collect and use your personal information;
                                </li>

                                <li>
                                    the categories of personal information that we collect;
                                </li>

                                <li>
                                    whether we sell your personal information to third parties;
                                </li>

                                <li>
                                    the categories of personal information that we sold or disclosed for a business purpose;
                                </li>

                                <li>
                                    the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
                                </li>

                                <li>
                                    the business or commercial purpose for collecting or selling personal information.
                                </li>
                            </ul>
                        </p>

                        <p className={styles.p}>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                        </p>

                        <p className={styles.p}>Right to Non-Discrimination for the Exercise of a {"Consumer's"} Privacy Rights</p>

                        <p className={styles.p}>We will not discriminate against you if you exercise your privacy rights.</p>

                        <p className={styles.p}>Verification process</p>

                        <p className={styles.p}>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>

                        <p className={styles.p}>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>


                        <p className={styles.p}>
                            Other privacy rights
                            <ul>
                                <li>You may object to the processing of your personal information.</li>
                                <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>

                                <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>

                                <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
                            </ul>
                        </p>

                        <p className={styles.p}>
                            To exercise these rights, you can contact us by email at service@ifta-ya.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                        </p>

                        <h2 className={styles.privacy_notice_section_header_title}>
                            12. DO WE MAKE UPDATES TO THIS NOTICE?
                        </h2>


                        <p className={styles.p}>
                            <span className={styles.span}>
                                In Short:
                            </span>{" "}
                            <span> Yes, we will update this notice as necessary to stay compliant with relevant laws.</span>
                        </p>

                        <p className={styles.p}>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated Revised date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                        </p>


                        <h2 className={styles.privacy_notice_section_header_title}>
                            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </h2>

                        <p className={styles.p}>
                            If you have questions or comments about this notice, you may email us at service@ifta-ya.com
                        </p>


                        <h2 className={styles.privacy_notice_section_header_title}>
                        14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        </h2>

                        <p className={styles.p}>
                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit: https://www.ifta-ya.com/credentials/manage-account/account-info when logged in.
                        </p>


                    </div>

                </div>



            </main>
        </div>
    );
}
