import styles from '../css/Peachtober.module.css';
import peachtober from '../images/peachtober.jpg';
import peachtobergraphic1 from '../images/peachtober-graphic1.jpg';
import peachtobergraphic2 from '../images/peachtober-graphic2.jpg';
import peachtobergraphic3 from '../images/peachtober-graphic3.jpg';
import peachtobergraphic4 from '../images/peachtober-graphic4.jpg';
import peachtobergraphic5 from '../images/peachtober-graphic5.jpg';
import peachtobergraphic6 from '../images/peachtober-graphic6.jpg';
import peachtobergraphic7 from '../images/peachtober-graphic7.jpg';
import peachtobergraphic8 from '../images/peachtober-graphic8.jpg';
import peachtobergraphic9 from '../images/peachtober-graphic9.jpg';
import peachtobergraphic10 from '../images/peachtober-graphic10.jpg';
import peachtobergraphic11 from '../images/peachtober-graphic11.jpg';
import peachtobergraphic12 from '../images/peachtober-graphic12.jpg';
import Contact from './Contact';

export default function Peachtober() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={peachtober} alt="Peachtober cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.peachtober}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Illustrator</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Illustrations, Branding</p>
                            </div>
                            <div>
                                <h3>Goal</h3>
                                <p>Finding my art style</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3>#Peachtober is a yearly challenge with a single word prompt, a day participated by all creatives around the globe.</h3>
                            <p>I've always been all over the place with finding my own art style. I decided to take on this challenge in October 2022 to really sit down and hone down on an art style that resonated with me. Through this challenge I discovered that 1) I love pink, puffy cheeks 2) a word can be interpreted in many ways 3) drawing one thing a day is challenging.</p>
                        </div>
                    </div>
                    <div className={`${styles.graphics} ${styles.paddingTop}`}>
                        <img src={peachtobergraphic1} alt="Peachtober graphic 1" />
                        <img src={peachtobergraphic2} alt="Peachtober graphic 2" />
                        <img src={peachtobergraphic3} alt="Peachtober graphic 3" />
                        <img src={peachtobergraphic4} alt="Peachtober graphic 4" />
                        <img src={peachtobergraphic5} alt="Peachtober graphic 5" />
                        <img src={peachtobergraphic6} alt="Peachtober graphic 6" />
                        <img src={peachtobergraphic7} alt="Peachtober graphic 7" />
                        <img src={peachtobergraphic8} alt="Peachtober graphic 8" />
                        <img src={peachtobergraphic9} alt="Peachtober graphic 9" />
                        <img src={peachtobergraphic10} alt="Peachtober graphic 10" />
                        <img src={peachtobergraphic11} alt="Peachtober graphic 11" />
                        <img src={peachtobergraphic12} alt="Peachtober graphic 12" />
                    </div>
                    <div className={styles.paddingTop}>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}