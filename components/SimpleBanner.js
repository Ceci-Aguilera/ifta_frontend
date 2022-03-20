import styles from "../styles/SimpleBanner.module.css";

import simple_banner from "../public/images/Truck Computer Banner.svg"
import Image from "next/image"

export default function SimpleBanner() {
    return(
        <div className={styles.simple_banner_div}>
            <Image src={simple_banner} alt="Ifta App" className={styles.simple_banner_div_img} layout="responsive"/>
        </div>
    );
};
