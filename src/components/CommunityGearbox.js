import styles from '../css/CommunityGearbox.module.css';
import communityGearbox from '../images/community-gearbox.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';

export default function CommunityGearbox() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Community Gearbox</title>
                <meta name="description" content="Creating mobile features to increase accountability and foster community engagement." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={communityGearbox} alt="Community Gearbox Cover" />
                </div>
            </div>
            <Contact />
        </div>
    )
}