import flower from '../images/flower.jpg';
import styles from '../css/Flower.module.css';
import flowercolors from '../images/flowercolors.jpg';
import flowerpostcard1 from '../images/flowerpostcard1.jpg';
import flowerpostcard2 from '../images/flowerpostcard2.jpg';
import flowerpicframe from '../images/flowerpicframe.jpg';
import flowermobilehomepage from '../images/flowermobilehomepage.png';
import flowermobilelistening from '../images/flowermobilelistening.png';
import flowerallmobilemockups from '../images/flowerallmobilemockups.jpg';
import flowertotebag from '../images/flowertotebag.jpg';
import flowerbusinesscard from '../images/flowerbusinesscard.jpg';
import oldflower from '../images/oldflower.jpg';
import Contact from './Contact';

export default function Flower() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={flower} alt="flower cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.flower}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>January 2021 - May 2021</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Branding Strategy, Brand Identity, Graphic Design, Illustrations, User-Interface</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3>Flower is a podcast hoping to inspire and ignite passion, creativity, positivity, and growth through its various audio options.</h3>
                            <p>Flower is a branding project inspired by the many podcasts I listen to at 1am to wind me down from a tiring/stressful day. Varying from mental health to career growth, Flower serves as a supporter for the most overwhelming parts of your life (which to be honest, is all the time).</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Logo + Color Palette</h1>
                        <div className={styles.flowercolors}>
                            <div className={styles.flowercolorspic}>
                                <img src={flowercolors} alt="flower colors" />
                            </div>
                            <div className={styles.flowercolorscontent}>
                                <h3>"Your blooming chapter starts here"</h3>
                                <p>I chose warm, bright, but natural colors to soothe while motivating users when seeing the brand. A more illustrative approach is used to showcase the creative freedom that all of us have when it comes to creating the best versions of ourselves.</p>
                                <p>These illustrations are paired with some of my favorite quotes to help bring good thoughts to days that may seemingly feel dark.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Additional Assets</h1>
                        <div className={styles.postcard}>
                            <img src={flowerpostcard1} alt="flower postcard 1" />
                            <img src={flowerpostcard2} alt="flower postcard 2" />
                        </div>
                        <div className={styles.vertical}>
                            <img src={flowerpicframe} alt="flower pic frame" />
                            <img src={flowermobilehomepage} alt="flower mobile homepage" />
                            <img src={flowermobilelistening} alt="flower mobile listening" />
                        </div>
                        <div className={styles.flowerallmobile}>
                            <img src={flowerallmobilemockups} alt="flower mobile mockups"/>
                        </div>
                        <div className={styles.flowermockups}>
                            <img src={flowertotebag} alt="flower tote bag"/>
                            <img src={flowerbusinesscard} alt="flower business card"/>
                        </div>
                        <div className={styles.rebrand}>
                            <h3>Flower went through a rebrand!</h3>
                            <p>Since Flower was my first ever design project for a design class - fun fact, now I’m a lead faciliator (what a full circle moment) - I knew I wanted to come back to it once I had more time + when my skills are a little more polished. So last summer, I sat down and tweaked stuff here and there to make sure it was up to date with the designer I am today.</p>
                            <p>but here's a glimpse of the old Flower!</p>
                        </div>
                        <div className={styles.oldflower}>
                            <img src={oldflower} alt="old flower"/>
                        </div>
                        <div className={styles.reflection}>
                            <h3>Reflection</h3>
                            <p>Just like the values of the podcast, Flower bloomed along with my own growth as a designer. This project will forever hold a special place in my heart as it reminds me of where I started my design journey. Before this project, I felt more lost than ever with the direction I wanted to take with my life. However, Flower sparked back the creativity inside of me that ceased a long time ago. Wherever I go along my creative journey, Flower will be the root that holds me and my dreams together.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}