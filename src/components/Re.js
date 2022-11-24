import styles from '../css/Re.module.css';
import recover from '../images/recover.jpg';
import ReCards from './ReCards';
import reinterviews1 from '../images/reinterviews1.png';
import reinterviews2 from '../images/reinterviews2.png';
import reinterviews3 from '../images/reinterviews3.png';
import resurveys from '../images/resurveys.png';
import remarketgaps from '../images/remarketgaps.png';
import designmethod from '../images/designmethod.jpg';
import affinityanddot from '../images/affinityanddot.jpg';
import narrowingdowntable from '../images/narrowingdowntable.jpg';
import narrowingdowngraph from '../images/narrowingdowngraph.jpg';
import prototypesketch from '../images/prototypesketch.jpg';
import prototype3d from '../images/prototype3d.jpg';
import refigmaanimation from '../images/refigmaanimation.jpg';
import reapprecord from '../images/reapprecord.png';
import reapplistenback from '../images/reapplistenback.png';
import relogo from '../images/relogo.png';
import remeaning from '../images/remeaning.png';
import repagesred from '../images/repagesred.jpg';
import repagesblue from '../images/repagesblue.jpg';
import mockupdesign from '../images/mockupdesign.jpg';
import remockuppages from '../images/remockuppages.jpg';
import regirl from '../images/regirl.png';
import refeedback from '../images/refeedback.png';
import Contact from './Contact';

export default function Re() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={recover} alt="RE cover image" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.re}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Product Designer</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>February 2022 - May 2022</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>Uyen Phan, Lucy Tran, Joelle Siong Sin, Robyn Lim</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>UI/UX, Design Methodology, Human Centric Design</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3>RE: is a prompts + recording app that helps two individuals stay connected when there are physical boundaries.</h3>
                            <p>RE: is a semester project born from a problem class DES INV 15 came up with and along with my three teammates, we tackled it while learning the various design methodology to help us break the problem down and allow us to come up with a creative solution. This project is broken down in three phases 1) Identify 2) Understand and 3) Conceptualize.</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>The Problem</h1>
                        <p>Relationships happen online and offline but in the case of long distance relationships, finding ways to <span className="bold">create intimate moments</span> with one another is essential to a thriving and healthy relationship. Often, people in long distance relationships utilize <span className="bold">modern technology to stay connected</span> with one another, but staring at a screen lacks the feeling of intimacy.</p>
                    </div>
                </div>
            </div>
            <div className={styles.requestionbackground}>
                <div className="limitWidth">
                    <div className={styles.rebackground}>
                        <p>Ultimately, our question is...</p>
                        <h3>How might we help users in long distance relationships feel more intimately connected with their partners?</h3>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.re}>
                    <div>
                        <p className="italic">Research</p>
                        <p className="bold">1. SET (social, economic, technological) Factors</p>
                        <div className={styles.set}>
                            <ReCards title="Social" content="<ul><li>Taking pictures in public places is sometimes very awkward</li><li>A lot of people don't like showing their faces on camera so it's hard to engage with them more intimately; “77% of women are camera shy.”</li><li>Selfies “evoke criticism [...] and are associated with non-authenticity and narcissism.</li></ul>" />
                            <ReCards title="Economic" content="<ul><li>Existing physical products are upwards of $80 - ie. individual Loveboxes are priced between $99 -$175</li><li>Large, direct competition exists from the several software apps like BeReal and Instagram that try to address our product opportunity gap statement are free</li></ul>" />
                            <ReCards title="Technological" content={`<ul><li>High device usage can damage relationships: <span class="italic">“Nearly 1 in 10 had argued with a partner about excessive time spent on the devices.”</span></li><li>The elderly may have a hard time using an application/technology than those who are younger</li><li>Those with poor internet connection would be at a disadvantage.</li></ul>`} />
                        </div>
                        <p className={`${styles.paddingTop} bold`}>2. Interviews</p>
                        <div className={styles.interviews}>
                            <img src={reinterviews1} alt="RE interviews 1" />
                            <img src={reinterviews2} alt="RE interviews 2" />
                            <img src={reinterviews3} alt="RE interviews 3" />
                        </div>
                        <p>Long distance relationships are very personal to different people, we wanted to get different views of who and how different couples stay present with each other despite the distance. Our goal is to have interviews where we can talk to both parties at the same time to see different perspectives. We also have a set of questions to ask, but we also wanted be open to their answers and ask follow up questions to their responses.</p>
                        <p className={`${styles.paddingTop} italic`}>Common pain points</p>
                        <p className="bold">3. Surveys</p>
                        <div>
                            <p>We surveyed 16 couples currently/have been in a long distance relationship.</p>
                            <div className={styles.surveys}>
                                <div className={styles.surveyscontent}>
                                    <ul>
                                        <li><span className={styles.pinkunderline}>50%</span> cited communication issues with LDP</li>
                                        <li><span className={styles.pinkunderline}>50%</span> like to video call their partners</li>
                                        <li><span className={styles.pinkunderline}>50%</span> talk to their partners every day</li>
                                        <li><span className={styles.pinkunderline}>68.8%</span> want a product that is both software and physical</li>
                                    </ul>
                                </div>
                                <div className={styles.surveyimage}>
                                    <img src={resurveys} alt="RE surveys" />
                                </div>
                            </div>
                        </div>
                        <p className="bold">4. Empathy Map</p>
                        <div className={styles.empathymap}>
                            <ReCards title="Say" content="<p>they want a:</p><ul><li>collaborative calendar</li><li>photo organizer</li><li>a set of new activities to do</li></ul>" />
                            <ReCards title="Think" content="<ul><li>when can I see them again?</li><li>I miss my partner</li><li>we are both so busy</li></ul>" />
                            <ReCards title="Do" content="<ul><li>connect with their partners via social media platforms</li><li>call their partners often</li><li>do virtual activities together</li></ul>" />
                            <ReCards title="Feel" content={`<ul><li><span class="bold">lonely:</span> disconnected from their partner, miss physical touch</li><li>sometimes <span class="bold">frustrated</span>: can't set time to meet and connect</li></ul>`} />
                            <ReCards title="Pains" content="<ul><li>lack of physical touch</li><li>communication is difficult to upkeep</li><li>attention</li></ul>" />
                            <ReCards title="Gains" content="<ul><li>learning to appreciate each other's time</li><li>figuring out creative ways to stay connected</li></ul>" />
                        </div>
                        <p className={`${styles.paddingTop} bold`}>5. Analyzing Exisiting Products</p>
                        <div className={styles.marketgaps}>
                            <div className={styles.marketgapscontent}>
                                <p className="italic">Market Gaps</p>
                                <p>focused on sharing media, especially photos</p>
                                <ul>
                                    <li>overwhelming abundance: diminishing authenticity</li>
                                    <li>pressure to regularly share</li>
                                    <li>lost meaning behind photos</li>
                                    <li>hard to keep up or keep track</li>
                                </ul>
                                <p>includes communication channels but lacks features that</p>
                                <ul>
                                    <li>increase intimacy</li>
                                    <li>resolve misunderstanding</li>
                                    <li>minimize distractions</li>
                                </ul>
                            </div>
                            <div className={styles.marketgapsimg}>
                                <img src={remarketgaps} alt="RE market gaps" />
                            </div>
                        </div>
                        <p className={`${styles.paddingTop} bold`}>6. Narrowing down our products requirements</p>
                        <div className={styles.requirements}>
                            <ReCards title="Emotions" content={`<p>The security, sensuality, love, confidence, and connectedness evoked by the product</p><ul><li>Goal: Evoke emotions through product use with partner.</li><li>Requirements:</li></ul><p><span class="bold">Must:</span> Aid connectedness and other emotions through product use</p><p><span class="bold">Should:</span> Not cause negative emotions to arise</p><p><span class="bold">Could:</span> Invoke surprise or humour through unexpected question prompts</p>`} />
                            <ReCards title="Core-Tech" content={`<p>The reliability, efficency, and durability of the product.</p><ul><li>Goal: Have high reliability, efficiency, and durability.</li><li>Requirements:</li></ul><p><span class="bold">Must:</span> Be quick to use, with as little steps as possible. Be as reliable as possible.</p><p><span class="bold">Should:</span> Be high quality and long lasting.</p><p><span class="bold">Could:</span> Utilize new developing technologies.</p>`} />
                            <ReCards title="Ergonomics" content={`<p>The comfort, safety, and ease of use of the product</p><ul><li>Goal: product will be easy and quick to use daily.</li><li>Requirements:</li></ul><p><span class="bold">Must:</span> Be able to work despite users being in different time zones and not have an excessive amount of features.</p><p><span class="bold">Should:</span> Ensure memories can be saved even if product becomes obsolete.</p><p><span class="bold">Could:</span> Allow for product customization.</p>`} />
                            <ReCards title="Identity" content={`<p>The personality, point in time, and sense of place created by the product</p><ul><li>Goal: Enhance personality, authenticity and sense of place of the user.</li><li>Requirements:</li></ul><p><span class="bold">Must:</span> specifically cater to challenges of long distance relationships.</p><p><span class="bold">Should:</span> Help users feel more at-peace with their LDP.</p><p><span class="bold">Could:</span> establish visual identity for the product.</p>`} />
                        </div>
                        <p className={`${styles.paddingTop} italic`}>Concept Generation</p>
                        <p className="bold">1. Design Method</p>
                        <p>Each teammate generated 10 concepts (initial total of 40). Then, we looked for parallels in our ideas using 3-12-3 brainstorming to generate 10 more concepts for a final total of 50.</p>
                        <img src={designmethod} alt="design method" />
                        <p className={`${styles.paddingTop} bold`}>2. Affinity Diagram & Dot Diagram</p>
                        <p>We sorted our concepts into their primary actions. Then, to downsize our concept set, each of us dot-voted our top 7 concepts. The following concepts that gained the most votes (dots) are Bangle Bright, Blanket Bae, Plant Care-Partner Care, Podcast + Prompts.</p>
                        <img src={affinityanddot} alt="affinity diagram" />
                        <p className={`${styles.paddingTop} bold`}>3. Narrowing Down</p>
                        <img src={narrowingdowntable} alt="narrowing down table" />
                        <img src={narrowingdowngraph} alt="narrowing down graph" className={styles.imagepad} />
                        <p>Finally, with these four concepts, we created a weighted matrix to systematically assess each through our VOA criteria. Which lead to our our two final concept: <span className="bold">Podcasts + Prompts and Bangle Bright</span></p>
                        <p className={`${styles.paddingTop} italic`}>Prototyping</p>
                        <p className="bold">1. Bangle Bright Prototype (physical)</p>
                        <div className={styles.prototypes}>
                            <div>
                                <p>initial sketch</p>
                                <img src={prototypesketch} alt="prototype sketch" />
                            </div>
                            <div>
                                <p>Vectary 3D Sketch</p>
                                <img src={prototype3d} alt="prototype 3d" />
                            </div>
                        </div>
                        <p>Figma animation</p>
                        <img src={refigmaanimation} alt="figma animation" />
                        <div className={styles.prototypedesc}>
                            <div>
                                <p className="bold">Critical Assumption</p>
                                <p>Will our product be used as a tool for connection over existing communication devices like Apple watches in long distance relationships?</p>
                            </div>
                            <div>
                                <p className="bold">Prototype Idea</p>
                                <ul>
                                    <li>Design mock-up on Figma</li>
                                    <li>Using weighted matrix, try to fill in the gaps (ease of use/loved)</li>
                                    <li>Helps see if design idea can realistically be made</li>
                                </ul>
                            </div>
                            <div>
                                <p className="bold">User Research</p>
                                <ul>
                                    <li>Next steps:
                                        <ul>
                                            <li>Utilize QuickNDirty method for user prototype research</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className={`${styles.paddingTop} bold`}>2. Podcast + Prompts Prototype (app)</p>
                        <div className={styles.reappgraphics}>
                            <img src={reapprecord} alt="RE app record" />
                            <img src={reapplistenback} alt="RE app listen back" />
                        </div>
                        <div className={styles.prototypedesc}>
                            <div>
                                <p className="bold">Critical Assumption</p>
                                <p>How often will our product be used in long distance relationships over simply texting and calling?</p>
                            </div>
                            <div>
                                <p className="bold">Prototype Idea</p>
                                <ul>
                                    <li>Design mock-up on Figma</li>
                                    <li>Using weighted matrix, try to fill in the gaps (personality/ease of use)</li>
                                    <li>Adding a physical aspect to our product rather than only software</li>
                                </ul>
                            </div>
                            <div>
                                <p className="bold">User Research</p>
                                <ul>
                                    <li>Instructed couples to send daily voice messages to one another according to prompts given</li>
                                </ul>
                            </div>
                        </div>
                        <p>After conducting further user research, sending our ideas to previous LDR couples we surveryed, we decided to choose <span className={styles.pink}>Podcasts & Prompts</span> as our final concept and started to refine our product further. We then continued to start improving our product based on feedback received from our questionnaire.</p>
                        <p className={`${styles.paddingTop} italic`}>Realize</p>
                        <div className={styles.relogocontent}>
                            <div className={styles.relogo}>
                                <img src={relogo} alt="RE logo" />
                                <img src={remeaning} alt="RE meaning" />
                            </div>
                            <div>
                                <p>We named our app/product “Re” as out three cores of our products are to help those in an LDR to remember, record, and reflect!</p>
                            </div>
                        </div>
                        <p className={styles.paddingTop}>Designing mid-fi interfaces of what the app would look like</p>
                        <img src={repagesred} alt="RE pages" />
                        <img src={repagesblue} alt="RE pages" className={styles.imagepad} />
                        <p className={styles.paddingTop}>Mocking up the designs!</p>
                        <img src={mockupdesign} alt="RE mock up designs" />
                        <img src={remockuppages} alt="RE more mock ups" className={styles.imagepad} />
                        <h1 className={`${styles.gradienttext} ${styles.paddingTop}`}>record & listen anytime, anywhere.</h1>
                        <div className={styles.rebreakdown}>
                            <div className={styles.rebreakdowncontent}>
                                <p className={styles.pink}>Ease of Use</p>
                                <ul>
                                    <li>simplistic + straightforward buttons</li>
                                    <li>few menu options to minimize confusion</li>
                                    <li>flexible with time; only requires partners to send responses by end-of-day</li>
                                </ul>
                                <p className={styles.pink}>Connection</p>
                                <ul>
                                    <li>questions offer interesting conversation topics
                                        <ul>
                                            <li>opens opportunities for both surface-level & in-depth responses</li>
                                        </ul>
                                    </li>
                                    <li>helps partners learn different things about each other</li>
                                </ul>
                                <p className={styles.pink}>Personality</p>
                                <ul>
                                    <li>get to know each other in more ways than before and allows partners to enter their own personalites in their recordings</li>
                                </ul>
                            </div>
                            <div className={styles.rebreakdownimg}>
                                <img src={regirl} alt="RE girl logo" />
                            </div>
                        </div>
                        <p className={`${styles.paddingTop} bold`}>3. Functional Representation</p>
                        <div className={styles.functionrepedesc}>
                            <div>
                                <p className={styles.blue}>omitted any photo aspect</p>
                                <ul>
                                    <li>users can <span className={styles.pink}>focus on their partner's voice:</span> increases intimacy through conversation</li>
                                    <li>audios <span className={styles.pink}>allow partners to open up:</span> helps minimize communication issues - a problem emphasized in our <span className="bold">survey responses</span></li>
                                    <li><span className={styles.pink}>mitigates excessive fixation on photos</span>, which, from our <span className={`${styles.underline} bold`}>initial literature research</span>, is a factor that can severely damage romantic relationships</li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.blue}>designed a physical recorder</p>
                                <ul>
                                    <li><span className={`${styles.underline} bold`}>users from interviews</span> and <span className={`${styles.underline} bold`}>classmates from focus groups</span> wanted a physical element: <span className={styles.pink}>curtails screentime and corresponding distractions</span></li>
                                    <li>audios can be downloaded like songs and can be listened to without looking at the screen: <span className={styles.pink}>emulates feeling of being physically together</span></li>
                                    <li>audios can be recorded anytime and can be as short as 1 minute: <span className={styles.pink}>allows partners to share throughout the day</span> and works for busy schedules</li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.blue}>added daily prompts</p>
                                <ul>
                                    <li>users can still <span className={styles.pink}>be as spontaneous as possible</span> but when they do respond to prompts like “What's your pet peeve?”, new conversations are formed, generating <span className={styles.pink}>feelings of excitement, exclusivity and novelty</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className={`${styles.paddingTop} bold`}>4. Users Feedback</p>
                        <p>To simulate the experience, we sent long-distance couples daily prompts and a reminder to record an audio for their partner. We did this for a period of five days, and received the following feedback:</p>
                        <ul>
                            <li>“enjoyed being able to <span className={styles.pink}>listen</span> to my partner's voice... creates a level of depth and <span className={styles.pink}>more personal connection</span> as to just text messages.”</li>
                            <li>“good initiators for conversation”</li>
                            <li>“relaxing and <span className={styles.pink}>nice to get stuff off my mind</span> and just ramble.”</li>
                        </ul>
                        
                        <div className={`${styles.refeedback} ${styles.paddingTop}`}>
                            <div className={styles.refeedbackcontent}>
                                <p className="bold">5. Feedback Implementation</p>
                                <ul>
                                    <li>Add a <span className={styles.pink}>pause function</span> for people who like to send short bursts of messages</li>
                                    <li>Provide <span className={styles.pink}>more complex prompts</span> that would force partners to think</li>
                                    <li>Implementing a <span className={styles.pink}>streak or reward</span> for consistent communication between partners</li>
                                </ul>
                            </div>
                            <div className={styles.refeedbackimg}>
                                <img src={refeedback} alt="RE feedback" />
                            </div>
                        </div>
                        <p className={`${styles.paddingTop} bold`}>Reflection</p>
                        <p>RE is the first project where I learned the myriad design methods and where I dip my foot in the product design sphere. I love the human to human interactions that came with this project. It made me realize how designing a project is the easiest part when it comes to producing a great product/design. The harder and more challenging, but rewarding part is the researching and trying to empathize with the users. This project has taught me to always design with a purpose - even on the simplest things.</p>
                        <div className={styles.paddingTop}>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}