import styles from '../css/SFMoma.module.css';
import sfmoma from '../images/sfmoma.jpg';
import sfmomaDesign from '../images/sfmoma-design.jpg';
import sfmomaDesign1 from '../images/sfmoma-design1.jpg';
import sfmomaDesign2 from '../images/sfmoma-design2.jpg';
import sfmomaMockup1 from '../images/sfmoma-mockup1.jpg';
import sfmomaMockup2 from '../images/sfmoma-mockup2.jpg';
import Contact from './Contact';
import { Helmet } from "react-helmet";

export default function SFMoma() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - SF Moma</title>
                <meta name="description" content="A poster for SF MoMA Halloween Block Party, celebrating the resilient community post-pandemic." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={sfmoma} alt="SF Moma Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.sfmoma}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>4 Hours - Designathon</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Graphic Design, Poster Design</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>Shirley Xiao</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3>Award - Speaker's Choice Prize</h3>
                            <p>A yearly designathon event, Berkeley Innovation (UC Berkeley design agency) partnered with San Francisco Museum of Modern Art (SF MOMA) to design a poster for their 2023 Halloween Block Party.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.paddingTop}>
                <div className={styles.challengebackground}>
                    <div className="limitWidth">
                        <div className={styles.challenge}>
                            <p className="bold">SF MOMA came to us with a challenge</p>
                            <p>to come up with a poster for their Halloween party that will breath a new life to the city after the lockdown of Covid. Their main purpose of the poster is to highlight <span className={styles.orange}>1) rebuilding the sense of community 2) a fun, welcoming environment for everyone</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.sfmoma}>
                    <div className={styles.paddingTop}>
                        <p className="bold">Poster Design</p>
                        <img src={sfmomaDesign} alt="SF Moma Design" />
                    </div>
                    <div className={`${styles.paddingTop} ${styles.posterdesign}`}>
                        <img src={sfmomaDesign1} alt="SF Moma Design 1" />
                        <img src={sfmomaDesign2} alt="SF Moma Design 2" />
                    </div>
                    <div className={styles.paddingTop}>
                        <p className="bold">Mockups</p>
                        <div className={styles.mockups}>
                            <img src={sfmomaMockup1} alt="SF Moma Mockup 1" />
                            <img src={sfmomaMockup2} alt="SF Moma Mockup 2" />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}