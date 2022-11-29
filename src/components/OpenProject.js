import styles from '../css/OpenProject.module.css';
import openproject from '../images/openproject.jpg';
import openprojectColors from '../images/openproject-colors.png';
import openprojectvalues1 from '../images/openproject-values1.jpg';
import openprojectvalues2 from '../images/openproject-values2.jpg';
import openprojectvalues3 from '../images/openproject-values3.jpg';
import openprojectvalues4 from '../images/openproject-values4.jpg';
import openprojectdesign1 from '../images/openproject-design1.jpg';
import openprojectdesign2 from '../images/openproject-design2.jpg';
import openprojectdesign3 from '../images/openproject-design3.jpg';
import openprojectdesign4 from '../images/openproject-design4.jpg';
import Contact from './Contact';
import YouTube from 'react-youtube';

export default function OpenProject() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={openproject} alt="Open Project Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.openproject}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Illustrations, Branding, UI</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3><a href="https://openprojectberkeley.com/" target="_blank" rel="noopener noreferrer" className={styles.url}>Open Project</a> is a UC Berkeley club redefining the culture of tech clubs at UC Berkeley.</h3>
                            <p>A friend reached out to me asking if I could create a brand identity for his new tech club that embodies inclusivity, passion, and innovation. He wants to potray the club as welcoming and as long as you are passionate about creating, you belong here.</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Logo + Color Palette</h1>
                        <img src={openprojectColors} alt="Open Project Colors" />
                    </div>
                </div>
            </div>
            <div className={styles.paddingTop}>
                <div className={styles.missionbackground}>
                    <div className="limitWidth">
                        <div className={styles.mission}>
                            <p className="bold">Mission Statement</p>
                            <p>We strive to build an open community for creators passionate about working on tech projects most meaningful to them.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.openproject}>
                    <div className={styles.paddingTop}>
                        <h1>Shape Assets</h1>
                        <p>Adding personality to the shapes! I really wanted to emphasize the overlapping of the shapes in order to really promote one of the main pillars of the club - inclusivity. By using shapes, I was able to make many variations which will be important when marketing the club but they also added a professional/neat feel to the club brand overall.</p>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Values</h1>
                        <div className={styles.values}>
                            <div className={styles.value}>
                                <div className={styles.valueTop}>
                                    <img src={openprojectvalues1} alt="Open Project Values 1" />
                                    <p className="bold">Inclusive Community</p>
                                </div>
                                <p>We value individual differences and strive to build a welcoming environment for everyone passionate about the tech space and creating meaningful projects.</p>
                            </div>
                            <div className={styles.value}>
                                <div className={styles.valueTop}>
                                    <img src={openprojectvalues2} alt="Open Project Values 2" />
                                    <p className="bold">Choose Your Own Path</p>
                                </div>
                                <p>We believe it is crucial that students are able to facilitate and operate their own development teams, ensuring an outlet for creative independence.</p>
                            </div>
                            <div className={styles.value}>
                                <div className={styles.valueTop}>
                                    <img src={openprojectvalues3} alt="Open Project Values 3" />
                                    <p className="bold">Build and Learn Together</p>
                                </div>
                                <p>We aim to maintain a curious space for everyone to collaborate with and learn from one another by allowing every individual to have pivotal roles in their respective development teams.</p>
                            </div>
                            <div className={styles.value}>
                                <div className={styles.valueTop}>
                                    <img src={openprojectvalues4} alt="Open Project Values 4" />
                                    <p className="bold">Challenge Your Limits</p>
                                </div>
                                <p>We always encourage our peers to reach beyond their comfort zones and explore areas they are unfamiliar with as we believe it is essential to their personal development.</p>
                            </div>
                        </div>
                        <div className={styles.paddingTop}>
                            <h1>Putting Everything Together</h1>
                            <p className="italic">Website Prototype + Design</p>
                            <YouTube videoId="GMMIxZ0f9VY" />
                            <p className={`${styles.paddingTop} italic`}>Home Page</p>
                            <img src={openprojectdesign1} alt="Open Project Design 1" />
                            <p className={`${styles.paddingTop} italic`}>Apply Page</p>
                            <img src={openprojectdesign2} alt="Open Project Design 2" />
                            <p className={`${styles.paddingTop} italic`}>About Page</p>
                            <img src={openprojectdesign3} alt="Open Project Design 3" />
                            <p className={`${styles.paddingTop} italic`}>Contact Page</p>
                            <img src={openprojectdesign4} alt="Open Project Design 4" />
                        </div>
                        <div className={styles.paddingTop}>
                            <h1>Reflection</h1>
                            <p>While designing Open Project, I had to consider what I would want the first impressions of the students seeing our club for the first time would be. The hardest challenge was straying away from the usual computer science club image while keeping the club's image professional. We did not want to be the "last choice." Open Project allowed me to dive deeper into the mindset of the students at school and made me more perceptive and open-minded while designing. Through this project I learned that design has to come from the heart! If what I put out resonates with the values I have, others will also feel the same while looking at our club's visuals.</p>
                        </div>
                        <div className={styles.paddingTop}>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}