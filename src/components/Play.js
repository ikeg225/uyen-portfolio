import Contact from './Contact';
import PlayProject from './PlayProject';
import styles from '../css/Play.module.css';
import playpeople from '../images/playpeople.png';
import sfmoma from '../images/sfmoma-cover.jpg';
import playpeachtober from '../images/play-peachtober.jpg';
import playsniffsniff from '../images/play-sniffsniff.jpg';

export default function Play() {
    return (
        <div className="limitWidth">
            <div className={styles.play}>
                <p className={styles.title}>Let's Have Fun!</p>
                <img className={styles.playpeople} src={playpeople} alt=""/>
                <div className={styles.playprojects}>
                    <PlayProject image={playpeachtober} title="Peachtober" description="#peachtober was a challenge I did during the month of October. The Instagram community was given a prompt each day and I was able to find my drawing style through this activity." link="/peachtober" />
                    <PlayProject image={sfmoma} title="SF Moma" description="My partner and I designed a poster during the CMYK designathon for SF MOMA's 2023 Halloween Block Party Event and won Speaker's Choice Award. " link="/sf-moma" />
                    <PlayProject image={playsniffsniff} title="Sniff Sniff" description="A project born from the world's largest collegiate hackathon to help students find classes’ discords and slack links + summarize crucial messages in groupchats without needing to read through them!" link="/sniff-sniff" />
                </div>
                <div className={styles.contactForm}>
                    <Contact />
                </div>
            </div>
        </div>
    )
}