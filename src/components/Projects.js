import Project from './Project';
import Sticker from './Sticker';
import Contact from './Contact';
import styles from '../css/Projects.module.css';
import playpeople from '../images/playpeople.png';
import justworks from '../images/justworks-cover.jpg';
import communitygearbox from '../images/community-gearbox-cover.jpg';
import re from '../images/re-cover.jpg';
import peets from '../images/peets-cover.jpg';
import flower from '../images/flower-cover.jpg';
import brave from '../images/brave-sticker.png';
import bloom from '../images/bloom-sticker.png';
import kind from '../images/kind-sticker.png';
import breathe from '../images/breath-sticker.png';
import arrow from '../images/arrow.png';
import playperson from '../images/playperson.png';

export default function Projects() {
    return (
        <>
            <div className="limitWidth">
                <div className={styles.frontline}>
                    <div className={styles.relativeWrapper}>
                        <p className={styles.translation}>hello in viet!</p>
                        <p className={styles.helloSticky}>XIN CH&Agrave;O</p>
                        <h1>COME ON INTO<br/>UYEN'S WORLD</h1>
                        <img className={styles.arrow} src={arrow} alt=""/>
                    </div>
                    <p className={styles.frontlineSubContent}>Uyen is a product designer aiming to weave together simplicity, joy, and connection through human-centric thinking</p>
                    <div className={styles.relativeWrapper}>
                        <img className={styles.playpeople} src={playpeople} alt=""/>
                        <img className={styles.playperson} src={playperson} alt=""/>
                        <p className={styles.descriptionSticky}>DESIGNING PRODUCTS WITH EMPATHY AS THE CORE</p>
                    </div>
                </div>
                <div className={styles.projects}>
                    <Project img={justworks} name="Justworks" subtitle="Mobile Directory" keywords="UX RESEARCH / MOBILE DESIGN / UI" description="Developed a mobile directory, streamlining access to important  information for over 1000 companies and their employees." url="/justworks" />
                    <Project img={communitygearbox} name="Community Gearbox" subtitle="Community Building" keywords="PRODUCT DESIGN /  PROTOTYPING" description="Creating mobile features to increase accountability and foster community engagement." url="/community-gearbox" />
                    <Project img={re} name="RE:" subtitle="Bridging LDRs" keywords="DESIGN METHODOLOGY / UX / UI" description="RE: is a prompts + recording app designed to foster connection between two individuals, transcending physical barriers." url="/re" />
                    <Project img={peets} name="Peet's Coffee" subtitle="Fall Campaign" keywords="MARKETING / VISUAL DESIGN" description="Marketing Peet's annual Fall campaign through various mediums: prints, poster designs, packaging, employee's merch, website design and ads." url="/peets" />
                    <Project img={flower} name="Flower" subtitle="Motivating Podcast" keywords="BRAND IDENTITY / ILLUSTRATIONS" description="Flower Podcast ignites passion, creativity, positivity, and growth through various audio options." url="/flower" />
                </div>
                <div className={styles.stickers}>
                    <p className={styles.surprise}>A SURPRISE?</p>
                    <p className={styles.stickerInfo}>If you scrolled this far, thank you.</p>
                    <p className={styles.stickerInfo}>You deserve some happy reminders. Pick one out & really take it to heart.</p>
                </div>
                <div className={styles.moveableStickers}>
                    <Sticker image={brave} tag="brave"/>
                    <Sticker image={bloom} tag="bloom"/>
                    <Sticker image={kind} tag="kind"/>
                    <Sticker image={breathe} tag="breathe"/>
                </div>
            </div>
            <Contact />
        </>
    )
}