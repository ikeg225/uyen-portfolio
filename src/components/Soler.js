import styles from '../css/Soler.module.css';
import soler from '../images/soler.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import solerLogo from '../images/soler-logo.gif';
import solerColorPalette from '../images/soler-color-palette.jpg';
import solerTypography from '../images/soler-typography.jpg';
import solerElements from '../images/soler-elements.jpg';
import solerBrandReasoning from '../images/soler-brand-reasoning.png';
import solerSlogan from '../images/soler-slogan.png';
import poster1 from '../images/Poster 1.jpg';
import poster2 from '../images/Poster 2.jpg';
import poster3 from '../images/Poster 3.jpg';
import poster4 from '../images/Poster 4.jpg';
import poster5 from '../images/Poster 5.jpg';
import mockup1 from '../images/Mockups 1.jpg';
import mockup2 from '../images/Mockups 2.jpg';
import mockup3 from '../images/Mockups 3.jpg';
import mockup4 from '../images/Mockups 4.jpg';
import mockup5 from '../images/Mockups 5.jpg';
import mockup6 from '../images/Mockups 6.png';

export default function Soler() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Soler</title>
                <meta name="description" content="Soler, a Playbook Hackathon creation, is an innovative AI generated shoe brand that earned us first place and a cash prize of $1000!" />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={soler} alt="Soler Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.soler}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>4 Hours</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Brand Identity, AI, Graphic Design</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>Isabel Zheng, Geena Yin, Kyle Wonzen</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p className="bold">First Place - $1000 Cash Prize</p>
                            <p>Berkeley Innovation, a design consultancy focused on human centric design, partnered with Playbook to host a hackathon merging the realms of AI and design to create a brand concept.</p>
                            <p>Our team took a creative route - a stylish shoe brand packed with powerful probiotics to combat odor-causing bacteria and keep your feet smelling fresh all day long.</p>
                        </div>
                    </div>
                    <img src={solerLogo} alt="Soler Logo" />
                    <hr className={styles.line}/>
                    <div className={styles.images}>
                        <div>
                            <p className={styles.gray}>COLOR PALETTE</p>
                            <img src={solerColorPalette} alt="Soler Color Palette" />
                        </div>
                        <div>
                            <p className={styles.gray}>TYPOGRAPHY</p>
                            <img src={solerTypography} alt="Soler Typography" />
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>AI GENERATED PROBIOTIC VISUAL ELEMENTS</p>
                    <img src={solerElements} alt="Soler Design Elements" />
                    <hr className={styles.line}/>
                    <p className={styles.gray}>BRAND REASONING</p>
                    <div className={styles.reasoning}>
                        <img src={solerBrandReasoning} alt="Soler Brand Reasoning"/>
                        <div className={styles.reasoningContent}>
                            <h1 className={styles.reasoningName}>soler</h1>
                            <p>Introducing the freshest shoe brand in town, Soler! Say goodbye to stinky feet and hello to happy, healthy soles. These kicks aren't just stylish, they're also packed with powerful probiotics that work tirelessly to combat odor-causing bacteria and keep your feet smelling fresh all day long.</p>
                            <p>You can finally ditch the embarrassing habit of hiding your feet under the table or avoiding shoe-free situations. No more cringing when you slip off your shoes after a long day or worrying about the funky smell that follows you around like a cloud. Stride confidently and sustainably with Soler shoes!</p>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>SLOGAN</p>
                    <img src={solerSlogan} alt="Soler Slogan" />
                    <hr className={styles.line}/>
                    <p className={styles.gray}>DESIGNS</p>
                    <div className={styles.postersRow1}>
                        <img src={poster1} alt="Soler Poster Design 1" />
                        <img src={poster2} alt="Soler Poster Design 2" />
                    </div>
                    <div className={styles.postersRow2}>
                        <img src={poster3} alt="Soler Poster Design 3" />
                        <img src={poster4} alt="Soler Poster Design 4" />
                        <img src={poster5} alt="Soler Poster Design 5" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>MOCKUPS</p>
                    <div className={styles.mockups1}>
                        <img src={mockup1} alt="Soler Mockup Design 1" />
                        <img src={mockup2} alt="Soler Mockup Design 2" />
                    </div>
                    <div className={styles.mockups2}>
                        <img src={mockup3} alt="Soler Mockup Design 3" />
                        <img src={mockup4} alt="Soler Mockup Design 4" />
                    </div>
                    <div className={styles.mockups3}>
                        <img src={mockup5} alt="Soler Mockup Design 5" />
                        <img className={styles.card} src={mockup6} alt="Soler Mockup Design 6" />
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}