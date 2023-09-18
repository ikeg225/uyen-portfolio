import styles from '../css/SniffSniff.module.css';
import sniffsniff from '../images/sniffsniff.jpg';
import snifflogo from '../images/snifflogo.jpg';
import sniffTwoLogos from '../images/sniff-logo-bw-colored.png';
import sniffColors from '../images/sniff-colors.png';
import sniffHome from '../images/sniff-home.jpg';
import sniffSearch from '../images/sniff-search.jpg';
import YouTube from 'react-youtube';
import sniffFullHome from '../images/sniff-fullhome.jpg';
import sniffFullSearch1 from '../images/sniff-fullsearch1.jpg';
import sniffFullSearch2 from '../images/sniff-fullsearch2.jpg';
import Contact from './Contact';

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
                            <p>SniffSniff helps sniff out your class' discord/link with just a few clicks and Sniffodoo (a bot) sniffs out important information from channels by summarizing important information such as homework tips, exam dates/prep, and the most critical information.</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <p className="bold">Inspiration/Rationale</p>
                        <p>Our inspiration came from our everyday lives and seeing other students' pain points. As classes are transitioning back to in-person, students are having a harder time finding the discord/slack link without people pasting it into the zoom chat during lectures. Often it is not until the 5th week a student accidentally stumbles upon the link and realizes they've been missing out on the community of classmates they've been relying on.</p>
                    </div>
                    <p className={`${styles.paddingTop} bold`}>Logo</p>
                    <div className={styles.logo}>
                        <div className={styles.logocontent}>
                            <p>With some going back and forth, one of our teammates came up with the perfect name “SniffSniff.” Just like a dog, what we are creating will allow students to “sniff” out discord/slack channels. It was also very appropriate for the second part of our project - Sniffdoo - a bot that summarizes or “sniffs” important information without the user having to read through hundreds of messages.</p>
                            <p>With the clock ticking, I started sketching up some ideas for the logo and of course, my first thought was it has to somehow resemble a dog.</p>
                        </div>
                        <div className={styles.logoimg}>
                            <img src={snifflogo} alt="Sniff Sniff Logo Sketch" />
                        </div>
                    </div>
                    <p className={`${styles.paddingTop} italic`}>Final Logo + Color Palette</p>
                    <div className={styles.finaldesign}>
                        <img src={sniffTwoLogos} alt="Sniff Sniff Logo" className={styles.finallogo} />
                        <img src={sniffColors} alt="Sniff Sniff Color Palette" className={styles.colors} />
                        <p className={styles.finaldescription}>A color-scheme resembling a trusted, reliable and lovable dog! Because of the limited time, I wanted to pick a simple color palette that would contrast with each other well (complementary colors)!</p>
                    </div>
                    <p className={`${styles.paddingTop} bold`}>Website</p>
                    <div className={styles.wireframes}>
                        <div>
                            <p className='italic'>Mid-Fi Wireframes - Home Page</p>
                            <img src={sniffHome} alt="Sniff Sniff Home Page" />
                        </div>
                        <div>
                            <p className='italic'>Mid-Fi Wireframes - Search Page</p>
                            <img src={sniffSearch} alt="Sniff Sniff Search Page" />
                        </div>
                    </div>
                    <p className={`${styles.paddingTop} italic`}>Website Prototype + Design</p>
                    <YouTube videoId="xIi_FrvZjA0" />
                    <p className={`${styles.paddingTop} italic`}>Hi-Fi - Home Page</p>
                    <img src={sniffFullHome} alt="Sniff Sniff Home Page" />
                    <div className={`${styles.wireframes} ${styles.paddingTop}`}>
                        <div>
                            <p className='italic'>Hi-Fi - Search Page (if found)</p>
                            <img src={sniffFullSearch1} alt="Sniff Sniff Search Found" />
                        </div>
                        <div>
                            <p className='italic'>Hi-Fi - Search Page (not found)</p>
                            <img src={sniffFullSearch2} alt="Sniff Sniff Search Not Found" />
                        </div>
                    </div>
                    <p className={`${styles.paddingTop} bold`}>Reflection</p>
                    <p>My teammates and I came into this hackathon with no expectations but to create a project meaningful to all of us. The challenge was the time crunch. With less than 24 hours, we have to flesh out a working product for the judges to see. I felt a lot of pressure as the designer because first impressions of what the website would look like are crucial especially when the judges only have less than 2 minutes to look at our project. After fighting with our sleepiness, we pulled through! Winning and being recognized was definitely worth an all-nighter. This will always be a college memory I will look back on and be proud of myself and my teammates!</p>
                </div>
            </div>
            <Contact />
        </div>
    )
}