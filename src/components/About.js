import Contact from './Contact';
import sun from '../images/sun.png';
import styles from '../css/About.module.css';
import aboutpic from '../images/aboutpic.png';
import aboutstar from '../images/aboutstar.png';
import blackstars from '../images/blackstars.png';
import aboutdoodles from '../images/aboutdoodles.png';

export default function About() {
    return (
        <>
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
                            <p className={styles.name}>Uyen Phan.<img src={blackstars} alt=""/></p>
                            <p className={styles.pronouns}>she/her</p>
                            <p className={styles.details}>Hello! My name is Uyen (as in “win”-ning at life) I am an undergrad studying at the University of California, Berkeley and majoring in Cognitive Science & minoring in Data Science!</p>
                            <p className={styles.details}>As a designer, I <span className={styles.italic}>love</span> colors and cool/funky graphics as you can tell. I have an obsession with the color green and my favorite thing to doodle are flowers. In my design process, I  believe in being as free as possible. I strongly think that any ideas are good ideas - even the “bad” ones!</p>
                            <p className={styles.details}>In my free time, I love “studying” and exploring different cafes. I am a borderline coffee addict but slowly transitioning to a matcha latte fanatic. I love playing with my doggo Luna and would advocate for her as the world's cutest and fluffiest doggo. Last summer, I interned at <span className={styles.bold}>Peet's Coffee</span> as their creative intern.</p>
                            <p className={styles.details}>You can catch me teaching a <span className={styles.bold}>branding class at Berkeley</span> (DESINV 198) or making assets for clients through <span className={styles.bold}>Innovative Design.</span></p>
                        </div>
                        <img src={aboutdoodles} className={`${styles.doodlesMobile} ${styles.images}`} width="100%" alt=""/>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}