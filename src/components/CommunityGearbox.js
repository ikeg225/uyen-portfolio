import styles from '../css/CommunityGearbox.module.css';
import communityGearbox from '../images/community-gearbox.jpg';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import rockClimber from '../images/gearbox-rock-climber.png';
import collaboration from '../images/gearbox-collaboration.png';
import affinity from '../images/gearbox-affinity.png';
import pie1 from '../images/gearbox-pie-1.png';
import pie2 from '../images/gearbox-pie-2.png';
import icon1 from '../images/gearbox-icon-1.png';
import icon2 from '../images/gearbox-icon-2.png';
import icon3 from '../images/gearbox-icon-3.png';
import quote from '../images/gearbox-interview-quote.png';
import synthesis from '../images/gearbox-synthesis.png';
import conceptMapping from '../images/gearbox-concept-mapping.png';
import insight1 from '../images/gearbox-insight-1.png';
import insight2 from '../images/gearbox-insight-2.png';
import insight3 from '../images/gearbox-insight-3.png';
import insight4 from '../images/gearbox-insight-4.png';
import persona1 from '../images/gearbox-persona-1.jpg';
import persona2 from '../images/gearbox-persona-2.jpg';
import mobileFeature1 from '../images/gearbox-mobile-feature-1.png';
import mobileFeature2 from '../images/gearbox-mobile-feature-2.png';
import mobileFeature3 from '../images/gearbox-mobile-feature-3.png';
import finalDesign1 from '../images/gearbox-final-design-1.jpg';
import finalDesign2 from '../images/gearbox-final-design-2.jpg';
import finalDesign3 from '../images/gearbox-final-design-3.jpg';

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
                    <p className={styles.gray}>GETTING TO KNOW THE COMPANY</p>
                    <div className={styles.gridWrapper}>
                        <div>
                            <h1>⚙️ What is Community Gearbox?</h1>
                            <p>Community Gearbox is a platform where people can <span className={`${styles.green} bold`}>lend and borrow items for free,</span> hence building deeper connections, decreasing individual consumption, and creating an abundance of shared resources.</p>
                            <h2 className={`${styles.green} bold`}>“Together we have so much”</h2>
                        </div>
                        <img src={rockClimber} alt="Rock Climber Design" />
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>THE ASK</p>
                    <h1>⭐️ Problem Scope</h1>
                    <div className={styles.tag}>
                        <div className={styles.leftSide}></div>
                        <div className={styles.rightSide}>
                            <p className={styles.rightSideContent}>HMW Design more collaborative features within Community Gearbox to make borrowing amongst a network of trusting people delightful and/or rewarding, so people lending items feel appreciated and compelled to share more and borrowers think of Community Gearbox before purchasing a new item?</p>
                        </div>
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>BREAKING DOWN THE HOW MIGHT WE?</p>
                    <p>Wow, that was a mouthful! Let's break down the problem scope into bite-sized pieces.</p>
                    <div className={styles.hmw}>
                        <div className={styles.bulletPoint}>
                            <p className={styles.number}>1</p>
                            <div>
                                <p className={styles.pointTitle}>Enhancing Collaborative Features</p>
                                <p className={styles.pointDescription}>How can we design and implement more collaborative features within Community Gearbox to promote enjoyable interactions and foster trust among users who borrow and lend items?</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <p className={styles.number}>2</p>
                            <div>
                                <p className={styles.pointTitle}>Promoting Appreciation and Sharing</p>
                                <p className={styles.pointDescription}>How can we create a system that makes lenders feel valued and appreciated for their contributions while also compelling them to share more frequently within the Community Gearbox network?</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <p className={styles.number}>3</p>
                            <div>
                                <p className={styles.pointTitle}>Influencing Consumer Behavior</p>
                                <p className={styles.pointDescription}>How can we influence borrowers' decision-making processes, encouraging them to consider Community Gearbox as their first choice before making new purchases of items they may only need temporarily?</p>
                            </div>
                        </div>
                        <img src={collaboration} alt="GearBox Collaboration Design" />
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>DIVING INTO RESEARCH</p>
                    <h1>⭐️ Approaches & Methods</h1>
                    <img src={affinity} alt="Research Approach and Method Design Flow" />
                    <hr className="line"/>
                    <p className={styles.gray}>SURVEYS</p>
                    <p>In our product design process, we initiate our user research with surveys. Given the diverse age range of our user base, spanning from young to older individuals, we have strategically chosen surveys as an effective means to gather insights from various age demographics.</p>
                    <p className={`${styles.green} bold`}>100+ responses</p>
                    <ul>
                        <li>Identify a variety of potential interviewees that demonstrate unique borrowing/ lending habits </li>
                        <li>Understand borrowing behavior</li>
                        <li>Understand how demographics and hobbies influence behavior</li>
                        <li>Understand the basis of building trust</li>
                    </ul>
                    <div className={styles.pieCharts}>
                        <div>
                            <p className="bold">What do you consider when lending people an item?</p>
                            <ol>
                                <li>Comfort level with sharing</li>
                                <li>Fulfillment through helping others</li>
                                <li>Personal Relationships</li>
                                <li>Safety and Security</li>
                            </ol>
                        </div>
                        <img src={pie1} alt="Survey Pie Chart Design" />
                    </div>
                    <div className={styles.pieCharts}>
                        <div>
                            <p className="bold">What do you consider when borrowing an item?</p>
                            <ol>
                                <li>Convenience</li>
                                <li>Personal relationships</li>
                                <li>Urgency</li>
                            </ol>
                        </div>
                        <img src={pie2} alt="Survey Pie Chart Design" />
                    </div>
                    <div className={styles.groupTags}>
                        <div className={styles.tag}>
                            <div className={styles.leftSide}></div>
                            <div className={styles.rightSide}>
                                <p className="bold">Helping Feels Good 👍</p>
                                <p className={styles.rightSideContent}>Satisfaction gained from doing good is a huge personal motivation for people to lend.</p>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.leftSide}></div>
                            <div className={styles.rightSide}>
                                <p className="bold">Relationships Matter! ❤️</p>
                                <p className={styles.rightSideContent}>The level of intimacy of relationships dictate the desire to borrow/ lend as mutual trust provides safety & security.</p>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.leftSide}></div>
                            <div className={styles.rightSide}>
                                <p className="bold">Sustainability ≠ lending/ borrowing 🌿</p>
                                <p className={styles.rightSideContent}>There is no strong correlation between sustainable habits and the frequency of lending/ borrowing.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>USER INTERVIEWS</p>
                    <p>We interviewed 11 interviewers who key characteristics are: niche hobbies, adventurous, sharing, trusting, community oriented, socially-conscious, on a budget. This diverse group, spanning in age from 18 to 60, is geographically dispersed across Berkeley, Seattle, and Virginia.</p>
                    <div className={styles.hmw}>
                        <div className={styles.withIcon}>
                            <img src={icon1} alt="" />
                            <p className="bold">Borrowing and Lending Behavior</p>
                            <p>Documenting detailed accounts of positive and negative past borrowing/lending experiences</p>
                        </div>
                        <div className={styles.withIcon}>
                            <img src={icon2} alt="" />
                            <p className="bold">Rewarding Experiences</p>
                            <p>Looking into what makes people feel appreciated and feel a sense of achievement</p>
                        </div>
                        <div className={styles.withIcon}>
                            <img src={icon3} alt="" />
                            <p className="bold">Digital Communities and Environments</p>
                            <p>Uncovering favorable digital features that form connections and build strong communities</p>
                        </div>
                        <img src={quote} alt="User Interview Quote" />
                    </div>
                    <hr className="line"/>
                    <h1>⭐️ Synthesis</h1>
                    <p className={styles.gray}>AFFINITY DIAGRAM</p>
                    <div className={styles.synthesis}>
                        <div className={styles.listingPoints}>
                            <div>
                                <p className={`${styles.green} bold`}>Lending Habits</p>
                                <p>Considerations that factor into lending</p>
                            </div>
                            <div>
                                <p className={`${styles.green} bold`}>Borrowing Habits</p>
                                <p>Typical behaviors and desires of borrowers</p>
                            </div>
                            <div>
                                <p className={`${styles.green} bold`}>Gratuity</p>
                                <p>How individuals express appreciation to others</p>
                            </div>
                            <div>
                                <p className={`${styles.green} bold`}>Digital Features</p>
                                <p>Aspects of digital experiences that people enjoy</p>
                            </div>
                        </div>
                        <img src={synthesis} alt="Synthesis Affinity Diagram" />
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>CONCEPT MAPPING</p>
                    <p>Connecting reoccuring patterns to the values, motivations, and priorities of potential users</p>
                    <div className={styles.synthesis}>
                        <div className={styles.listingPoints}>
                            <div>
                                <p className={`${styles.green} bold`}>Community</p>
                                <p>Accountability, Reciprocal Relationships, Connection</p>
                            </div>
                            <div>
                                <p className={`${styles.green} bold`}>Digital Features</p>
                                <p>Openness, Goal Oriented, Visual Features</p>
                            </div>
                            <div>
                                <p className={`${styles.green} bold`}>Borrowing & Lending</p>
                                <p>Familiarity, Saving Money, Exploration, Altruism + Acknowledgement</p>
                            </div>
                        </div>
                        <img className={styles.conceptMapping} src={conceptMapping} alt="Concept Mapping Diagram Design" />
                    </div>
                    <hr className="line"/>
                    <h1>⭐️ Key Insights</h1>
                    <div className={styles.insights}>
                        <div className={styles.insight}>
                            <img src={insight1} alt="" />
                            <p className="bold">Lending Habits & Altruism</p>
                            <p>A willingness to lend depends on familiarity, and lenders are motivated by the act of doing good to strengthen mutual respect and aid.</p>
                        </div>
                        <div className={styles.insight}>
                            <img src={insight2} alt="" />
                            <p className="bold">Borrowing Habits</p>
                            <p>People borrow for temporary and inconsistent usage, saving money, and convenience, since the exchange process can be difficult.</p>
                        </div>
                        <div className={styles.insight}>
                            <img src={insight3} alt="" />
                            <p className="bold">Lending Habits & Altruism</p>
                            <p>People feel more connected to others in digital communities when there is more unfiltered and casual exchange of comments or content.</p>
                        </div>
                        <div className={styles.insight}>
                            <img src={insight4} alt="" />
                            <p className="bold">Lending Habits & Altruism</p>
                            <p>People love to be appreciated for their contributions and feel reciprocated through: words of affirmation, IOUs, gifts and being publicly acknowledged.</p>
                        </div>
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>USER PERSONAS & JOURNEYS</p>
                    <img className={styles.persona} src={persona1} alt="Gearbox Persona Journey" />
                    <img className={styles.persona} src={persona2} alt="Gearbox Persona Journey" />
                    <hr className="line"/>
                    <h1>⭐️ Mobile Features</h1>
                    <div className={styles.mobileFeatures}>
                        <div className={styles.mobileFeature}>
                            <div>
                                <p className={`${styles.green} bold`}>Featured Feats!</p>
                                <ul>
                                    <li>Motivational</li>
                                    <li>Community-building</li>
                                </ul>
                            </div>
                            <img src={mobileFeature1} alt="Mobile Feature Design" />
                        </div>
                        <div className={styles.mobileFeature}>
                            <div>
                                <p className={`${styles.green} bold`}>Publicizing Borrowing and Lending</p>
                                <ul>
                                    <li>Accountability</li>
                                    <li>Motivational</li>
                                </ul>
                            </div>
                            <img src={mobileFeature2} alt="Mobile Feature Design" />
                        </div>
                        <div className={styles.mobileFeature}>
                            <div>
                                <p className={`${styles.green} bold`}>Lending Leaderboard</p>
                                <ul>
                                    <li>Public acknowledgment</li>
                                    <li>Motivational</li>
                                </ul>
                            </div>
                            <img src={mobileFeature3} alt="Mobile Feature Design" />
                        </div>
                    </div>
                    <hr className="line"/>
                    <p className={styles.gray}>RATIONALE</p>
                    <p>We incorporated a borrowing feed, leaderboard, and interactive features to increase accountability and community engagement throughout the app.</p>
                    <ul className={styles.bottomList}>
                        <li><span className={`${styles.green} bold`}>Borrowing feed -</span> A community feed that shows the borrowing transactions of a user and their friends, as a way to stay updated, share photos, and show appreciation.</li>
                        <li><span className={`${styles.green} bold`}>Lending leaderboard -</span> A leaderboard between a user and their friends that incentivizes lending through friendly competition.</li>
                        <li><span className={`${styles.green} bold`}>Interactive features - </span> Emoji comment reactions that generate community interaction and a more visual interface.</li>
                    </ul>
                    <hr className="line"/>
                    <h1>⭐️ Final Designs</h1>
                    <img className={styles.finalDesign} src={finalDesign1} alt="Community Gearbox Final Design" />
                    <img className={styles.finalDesign} src={finalDesign2} alt="Community Gearbox Final Design" />
                    <img className={styles.finalDesign} src={finalDesign3} alt="Community Gearbox Final Design" />
                </div>
            </div>
            <Contact />
        </div>
    )
}