import styles from '../css/CommunityGearbox.module.css';
import communityGearbox from '../images/community-gearbox.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';

export default function CommunityGearbox() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Community Gearbox</title>
                <meta name="description" content="Creating mobile features to increase accountability and foster community engagement." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={communityGearbox} alt="Community Gearbox Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.gearbox}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Product Design Consultant (Contract)</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>January - May 2023</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>User Research, Mobile Design, Product Strategy, Prototyping</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>Isabel Zheng (Project Mentor), Michid Bayambajav, Gily Yu, Green Yin</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>Community Gearbox, a San Francisco-based startup, aspires to foster a sustainable community and promote a circular economy by facilitating item borrowing and lending among its users.</p>
                            <p>The CEO approached us with the challenge of enhancing the collaborative aspects of this platform, with the aim of making the borrowing and lending experience more enjoyable and rewarding. The objective was to create an environment where individuals lending items not only feel valued but also encouraged to share more.</p>
                            <p>To address this challenge, our team undertook a structured approach consisting of four key sprints: Research, Synthesis, Ideation, and Prototyping</p>
                        </div>
                    </div>
                    <hr className="line"/>
                </div>
            </div>
            <Contact />
        </div>
    )
}