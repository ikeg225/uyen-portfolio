import styles from '../css/Soler.module.css';
import soler from '../images/soler.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';

export default function Soler() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Soler</title>
                <meta name="description" content="Soler, a Playbook Hackathon creation, is an innovative AI generated shoe brand that earned us first place and a cash prize of $1000!" />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={soler} alt="Soler Cover" />
                </div>
            </div>
            <Contact />
        </div>
    )
}