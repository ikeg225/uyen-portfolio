import styles from '../css/Justworks.module.css';
import justworks from '../images/justworks.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';

export default function Justworks() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Justworks</title>
                <meta name="description" content="Developed a mobile directory, streamlining access to important information for over 1000 companies and their employees." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={justworks} alt="Justworks Cover" />
                </div>
            </div>
            <Contact />
        </div>
    )
}