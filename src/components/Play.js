import Contact from './Contact';
import PlayProject from './PlayProject';
import styles from '../css/Play.module.css';
import playpeople from '../images/playpeople.png';
import playdoodles from '../images/play-doodles.jpg';
import playpeachtober from '../images/play-peachtober.jpg';
import playsniffsniff from '../images/play-sniffsniff.jpg';

export default function Play() {
    return (
        <div className="limitWidth">
            <div className={styles.play}>
                <p className={styles.title}>Let's Have Fun!</p>
                <img className={styles.playpeople} src={playpeople} alt=""/>
                <div className={styles.playprojects}>
                    <PlayProject image={playpeachtober} title="Peachtober" description="#peachtober was a challenge I did during the month of October. The instagram community was given a prompt each day and I was able to find my drawing style through this activity." link="/peachtober" />
                    <PlayProject image={playdoodles} title="Doodles/Graphics" description="Vectors galore! These are mostly made when I have a mountain of assignments to do. Something about stress/pressure really make me extra creative." link="/doodles-and-graphics" />
                    <PlayProject image={playsniffsniff} title="Sniff Sniff" description="A project born from the world's largest collegiate hackathon to help students find classes' discords and slack links + summarizes crucial messages in groupchats without needing to read through them!" link="/sniff-sniff" />
                </div>
                <div className={styles.contactForm}>
                    <Contact />
                </div>
            </div>
        </div>
    )
}