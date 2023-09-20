import Contact from './Contact';
import sun from '../images/sun.png';
import styles from '../css/About.module.css';
import aboutpic from '../images/aboutpic.png';
import aboutstar from '../images/aboutstar.png';
import blackstars from '../images/blackstars.png';
import aboutdoodles from '../images/aboutdoodles.png';
import { Helmet } from "react-helmet";

export default function About() {
    return (
        <>
            <Helmet>
                <title>Uyen Phan - About</title>
                <meta name="description" content="I am a senior studying at the University of California, Berkeley and majoring in Cognitive Science & minoring in Data Science with a certificate in Design Innovation." />
            </Helmet>
            <div className="limitWidth">
                <div className={styles.about}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div style={{width: "fit-content", position: "relative"}}>
                                <img src={aboutpic} className={styles.images} width="100%" alt="Uyen Phan"/>
                                <img src={sun} className={`${styles.sun} spinning`} width="100%" alt=""/>
                                <img src={aboutstar} className={`${styles.star} twinkle`} width="100%" alt=""/>
                            </div>
                            <img src={aboutdoodles} className={`${styles.doodles} ${styles.images}`} width="100%" alt=""/>
                        </div>
                        <div className={styles.aboutme}>
                            <p className={styles.talk}>hey! I'm</p>
                            <p className={styles.name}>UYEN PHAN</p>
                            <p className={styles.pronouns}>she/her</p>
                            <p className={styles.details}>Hello! My name is Uyen (as in “win”-ning) I am a senior studying at the University of California, Berkeley and majoring in Cognitive Science & minoring in Data Science with a certificate in Design Innovation.</p>
                            <p className={styles.details}>I love design because it is more than what people know it to be. Design is about creating human connection through impactful changes aiming to better an aspect of someone's life whether its minimal or big. As designers, we hold the wand to create the magic. I aim to create a product that has just the sweet spot between feasibility, desirability, and viability while making it delightful.</p>
                            <p className={styles.details}>In my free time, I love “studying” and exploring different cafes. I am a borderline coffee addict but slowly transitioning to a matcha latte fanatic. I love playing with my doggo Luna and would advocate for her as the world's cutest and fluffiest doggo.</p>
                            <p className={styles.details}>You can catch me marketing for Innovative Design, designing human-centric solutions through Berkeley Innovation, or making the design community more accessible at Design at Berkeley!</p>
                            <h1 className={styles.previously}>PREVIOUSLY...</h1>
                            <ul>
                                <li><span className="bold">Pinterest,</span> Product Design Consultant</li>
                                <li><span className="bold">Justworks,</span> Product Design Intern</li>
                                <li><span className="bold">Peet's Coffee,</span> Design Intern</li>
                                <li><span className="bold">Community Gearbox,</span> Product Design Consultant</li>
                                <li><span className="bold">Innovative Design,</span> VP of Marketing</li>
                                <li><span className="bold">Design at Berkeley,</span> VP of Marketing</li>
                                <li><span className="bold">Branding Identity and Graphic Design Course,</span> Lead Instructor</li>
                            </ul>
                        </div>
                        <img src={aboutdoodles} className={`${styles.doodlesMobile} ${styles.images}`} width="100%" alt=""/>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}