import Project from './Project';
import re from '../images/re.jpg';
import star from '../images/star.png';
import tick from '../images/tick.png';
import flower from '../images/flower.jpg';
import orange from '../images/orange.png';
import twinkle from '../images/twinkle.png';
import happyface from '../images/happyface.png';
import styles from '../css/Projects.module.css';

export default function Projects() {
    return (
        <div>
            <div className={styles.frontline}>
                <h2 className={styles.knock}>*knock knock*</h2>
                <h1 className={styles.introBig}>Come on in to<img src={happyface} width="100px" className={styles.happyface}/><br />Uy<span className={styles.over}>e<img src={tick} width="30px"/></span>n's W<img src={star} width="50px" />rld! <img src={twinkle} width="50px" /></h1>
                <p className={styles.introText}>Uyen is a designer who loves to explore<br />different styles and is never scared of<br />coloring outside the lines!<img src={orange} width="250px" className={styles.orange}/></p>
            </div>
            <div className={styles.projects}>
                <Project img={flower} name="Flower" description="branding | illustrations" />
                <Project img={re} name="RE:" description="user interface | user experience" />
            </div>
        </div>
    )
}