import Contact from './Contact';
import PlayProject from './PlayProject';
import styles from '../css/Play.module.css';
import play_temp from '../images/play_temp.png';
import playpeople from '../images/playpeople.png';

export default function Play() {
    return (
        <div className="limitWidth">
            <div className={styles.play}>
                <p className={styles.title}>Let's Have Fun!</p>
                <img className={styles.playpeople} src={playpeople} alt=""/>
                <PlayProject image={play_temp} title="Peachtober" description="Whenever I need a break from anything, I would pull out my iPad to doodle. They are funky, nonsensical, colorful, and super fun! Turn off your brain and let your hands do the work :)" link="" />
                <PlayProject image={play_temp} title="D@B" description="Making stickers have always been a dream of mine since--forever! Here are some fun sticker sheets/collections. Hopefully one day I can make this dream a reality." link="" />
                <PlayProject image={play_temp} title="Doodles/Graphics" description="Vectors galore! These are mostly made when I have a mountain of assignments to do. Something about stress/pressure  really make me extra creative." link="" />
                <div className={styles.contactForm}>
                    <Contact />
                </div>
            </div>
        </div>
    )
}