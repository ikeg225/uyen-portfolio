import styles from '../css/InnovativeDesign.module.css';
import innovativeDesign from '../images/innovative-design.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';

export default function InnovativeDesign() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Innovative Design</title>
                <meta name="description" content="Innovative Design is a UC Berkeley's pro-bono creative agency. Marketing serves as the backbone of the club ensuring our events, club info, and mission spreads throughout campus!" />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={innovativeDesign} alt="Innovative Design Cover" />
                </div>
            </div>
            <Contact />
        </div>
    )
}