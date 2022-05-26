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
import happyface from '../images/happyface.png';
import bluespikes from '../images/bluespikes.png';
import rebackground from '../images/rebackground.png';
import flowerbackground from '../images/flowerbackground.png';
import styles from '../css/Projects.module.css';

import bebrave from '../images/sticker-bebrave.png';
import bekind from '../images/sticker-bekind.png';
import besunshine from '../images/sticker-besunshine.png';
import blooming from '../images/sticker-blooming.png';
import breather from '../images/sticker-breather.png';
import itsokay from '../images/sticker-itsokay.png';

export default function Projects() {
    return (
        <div>
            <div className={styles.frontline}>
                <div className={styles.left}>
                    <p className={styles.knock}>*knock knock*</p>
                    <h1 className={styles.introBig}>Come on into<img src={happyface} width="100px" className={`${styles.happyface} spinningReverse`}/><br />Uy<span className={styles.over}>e<img src={tick} width="30px"/></span>n's W<img src={star} width="50px" className={`${styles.ospin} spinning`}/>rld!<img src={twinkle} width="50px" className={`${styles.star} twinkle`}/></h1>
                    <p className={styles.introText}>Uyen is a designer who loves to explore<br />different styles and is never scared of<br />coloring outside the lines!<img src={orange} height="200px" className={styles.orangeMobile}/></p>
                    <p className={styles.introTextBreak}>Uyen is a designer who loves<br />to explore different styles and<br />is never scared of coloring<br />outside the lines!<img src={orange} height="200px" className={styles.orangeMobile}/></p>
                </div>
                <div className={styles.right}>
                    <img className={styles.profile} src={profile} />
                    <img src={orange} height="200px" className={styles.orange}/>
                </div>
            </div>
            <div className={styles.projects}>
                <img className={`${styles.bluespike} spinning`} src={bluespikes} />
                <Project img={flower} name="Flower" description="branding | illustrations" imgmobile={flowerbackground}/>
                <Project img={re} name="RE" description="user interface | user experience" imgmobile={rebackground}/>
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