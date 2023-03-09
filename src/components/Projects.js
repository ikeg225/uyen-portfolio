import Project from './Project';
import Sticker from './Sticker';
import Contact from './Contact';
import re from '../images/re.jpg';
import star from '../images/star.png';
import tick from '../images/tick.png';
import flower from '../images/flower.jpg';
import orange from '../images/orange.png';
import profile from '../images/profile.png';
import twinkle from '../images/twinkle.png';
import peets from '../images/peetscover.jpg';
import happyface from '../images/happyface.png';
import styles from '../css/Projects.module.css';
import openproject from '../images/openprojectcover.jpg';
import learningexperience from '../images/learning-experience-cover.jpg';

import bebrave from '../images/sticker-bebrave.png';
import bekind from '../images/sticker-bekind.png';
import besunshine from '../images/sticker-besunshine.png';
import blooming from '../images/sticker-blooming.png';
import breather from '../images/sticker-breather.png';
import itsokay from '../images/sticker-itsokay.png';

export default function Projects() {
    return (
        <div className="limitWidth">
            <div className={styles.frontline}>
                <div className={styles.left}>
                    <p className={styles.knock}>*knock knock*</p>
                    <h1 className={styles.introBig}>Come on into<img src={happyface} width="100px" className={`${styles.happyface} spinningReverse`} alt=""/><br />Uy<span className={styles.over}>e<img src={tick} width="30px" alt=""/></span>n's W<img src={star} width="50px" className={`${styles.ospin} spinning`} alt="o"/>rld!<img src={twinkle} width="50px" className={`${styles.star} twinkle`} alt=""/></h1>
                    <p className={styles.introText}>Uyen is a designer who loves to<br />explore different styles and is never<br />scared of coloring outside the lines!<img src={orange} height="200px" className={styles.orangeMobile} alt=""/></p>
                    <p className={styles.introTextBreak}>Uyen is a designer who loves<br />to explore different styles and<br />is never scared of coloring<br />outside the lines!<img src={orange} height="200px" className={styles.orangeMobile} alt=""/></p>
                </div>
                <div className={styles.right}>
                    <img className={styles.profile} src={profile} alt=""/>
                    <img src={orange} height="200px" className={styles.orange} alt=""/>
                </div>
            </div>
            <div className={styles.projects}>
                <Project img={learningexperience} name="Learning Experience" description="design challenge | ux design" url="https://drive.google.com/file/d/11ZFvnkH-aMdOb83nEpAX3Qfpdud7RXiD/view?usp=sharing" outbound={true} />
                <Project img={flower} name="Flower" description="brand identity | illustrations" url="/flower" outbound={false} />
                <Project img={re} name="RE" description="ui/ux | product design" url="/re" outbound={false}/>
                <Project img={peets} name="Peet's Coffee" description="marketing | brand strategy" url="/peets" outbound={false}/>
                <Project img={openproject} name="Open Project" description="brand identity | website design" url="/open-project" outbound={false}/>
            </div>
            <div className={styles.stickers}>
                <p className={styles.surprise}>*a surprise?*</p>
                <p className={styles.stickerInfo}>If you scrolled this far, thank you.</p>
                <p className={styles.stickerInfo}>You deserve some happy reminders. Pick one out & really take it to heart.</p>
                <p className={styles.stickersPick}>Pick A Sticker!</p>
            </div>
            <div className={styles.moveableStickers}>
                <Sticker image={bebrave} tag="bebrave"/>
                <Sticker image={besunshine} tag="besunshine"/>
                <Sticker image={itsokay} tag="itsokay"/>
                <Sticker image={blooming} tag="blooming"/>
                <Sticker image={breather} tag="breather"/>
                <Sticker image={bekind} tag="bekind"/>
            </div>
            <div className={styles.contactForm}>
                <Contact />
            </div>
        </div>
    )
}