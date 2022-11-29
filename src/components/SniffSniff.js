import styles from '../css/SniffSniff.module.css';
import sniffsniff from '../images/sniffsniff.jpg';

export default function SniffSniff() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={sniffsniff} alt="Sniff Sniff Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.sniffsniff}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>24 Hours - Hackathon</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Website Design, User Interface</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>Ethan Ikegami, Hrish Leen, Nhu Vu</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3><a href="https://sniffsniff.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.url}>SniffSniff</a> was created during my team's first Hackathon ever! CalHacks 9.0 is the world's largest collegiate hackathon (800+ people) hosted by UC Berkeley</h3>
                            <h3>Award - Best First Hack</h3>
                            <p>SniffSniff helps sniff out your class' discord/link with just a few clicks and Sniffodoo (a bot) sniff out important information from channels by summarizing important information such as homework tips, exam dates/prep, and the most critical information.</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Inspiration/Rationale</h1>
                        <p>Our inspiration came from our everyday lives and seeing other students' pain points. As classes are transitioning back to in-person, students are having a harder time finding the discord/slack link without people pasting it into the zoom chat during lectures. Often it is not until the 5th week a student accidentally stumbles upon the link and realized they've been missing out on the community of classmates they've been relying on.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}