import peets from '../images/peets.jpg';
import styles from '../css/Peets.module.css';
import peetsfallfeels from '../images/peetsfallfeels.jpg';
import peetslatteseason from '../images/peetslatteseason.jpg';
import peetspumpkinseason from '../images/peetspumpkinseason.jpg';
import peetsfallfeelsgraphic1 from '../images/peetsfallfeelsgraphic1.jpg';
import peetsfallfeelsgraphic2 from '../images/peetsfallfeelsgraphic2.jpg';
import peetsfallfeelsgraphic3 from '../images/peetsfallfeelsgraphic3.jpg';
import peetsfallfeelsgraphic4 from '../images/peetsfallfeelsgraphic4.jpg';
import peetsgreenshirt from '../images/peetsgreenshirt.jpg';
import peetsyellowshirt from '../images/peetsyellowshirt.jpg';
import peetshappytogether1 from '../images/peetshappytogether1.jpg';
import peetshappytogether2 from '../images/peetshappytogether2.jpg';
import peetscoffeemug from '../images/peetscoffeemug.jpg';
import peetsuglysweater from '../images/peetsuglysweater.jpg';
import peetsalbertsonad1 from '../images/peetsalbertsonad1.jpg';
import peetsalbertsonad2 from '../images/peetsalbertsonad2.jpg';
import instacartdesktop from '../images/instacartdesktop.jpg';
import instacartmobile from '../images/instacartmobile.jpg';
import Contact from './Contact';

export default function Peets() {
    return (
        <div>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={peets} alt="peets" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.peets}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Creative Design Intern</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>June 2022 - August 2022</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Branding, Marketing, Print Production, Packaging.</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <h3>For summer 2022, I had the pleasure to intern at Peet's Coffee as their creative design intern (and learned so much!)</h3>
                            <p>As my first design internship, jumping into the Creative Team at Peet's filled me with nervous excitement. Here I was able to dip my foot into all the creative channels that allow Peet's to stay as one of the most well-known coffee brands across the nation.</p>
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Fall 22 Seasonal Campaign</h1>
                        <p className="italic">Main In-Store Poster Series</p>
                        <div className={styles.peetsfeels}>
                            <img src={peetsfallfeels} />
                            <img src={peetslatteseason} />
                            <img src={peetspumpkinseason} />
                        </div>
                        <p>The fall campaign was what the Design Team was mainly working on in the summer to prep for their famous fall seasonal beverages and foods. The watercolored graphics along with the muted fall colors tie the playfulness of fall together. These designs were really up my alley since I love playing around with illustrative elements.</p>
                        <p className="italic">Employee's Seasonal Merch</p>
                        <div className={styles.peetsfeelsgraphic}>
                            <img src={peetsfallfeelsgraphic1} />
                            <img src={peetsfallfeelsgraphic2} />
                            <img src={peetsfallfeelsgraphic3} />
                            <img src={peetsfallfeelsgraphic4} />
                        </div>
                        <p>Designing merch was one of my favorite things I made at Peets. It allowed me to go outsides the lines and show my illustrative style. Here are some iterations I made!</p>
                        <div className={styles.peetshirts}>
                            <img src={peetsgreenshirt} />
                            <img src={peetsyellowshirt} />
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Ideating Ideas for Holiday Seasonal Campaign/Marketing</h1>
                        <p className="italic">Holiday Window Cling</p>
                        <div className={styles.peetshappytogether}>
                            <img src={peetshappytogether1} />
                            <img src={peetshappytogether2} />
                        </div>
                        <p className="italic">“Ugly” Christmas Sweater + “Ultimate Holiday Gift Guide”</p>
                        <div className={styles.sweatermug}>
                            <img src={peetsuglysweater} />
                            <img src={peetscoffeemug} />
                        </div>
                        <p>During the last stretch of my internship, the Creative Team turned their gears to the Holiday Season (so fun and festive!) The central theme is “Happy Together”. We all came together to come up with creative ways to market the happiness that surrounds the Holidays. Some ideas I came up with were a fun colorful window cling, “ugly” Christmas sweaters for the employees instead of the usual T-shirts, and social media posts such as “The Ultimate Holiday Gift Guide” to promote our Holiday merch!</p>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>CPG Marketing</h1>
                        <p className="italic">Albertson's Ads</p>
                        <div className={styles.peetsalbertsonad}>
                            <img src={peetsalbertsonad1} />
                            <img src={peetsalbertsonad2} />
                        </div>
                        <p className="italic">InstaCart UI</p>
                        <div className={styles.instacart}>
                            <img src={instacartdesktop} />
                            <img src={instacartmobile} />
                        </div>
                    </div>
                    <div className={styles.paddingTop}>
                        <h1>Reflection</h1>
                        <p>Because Peet's was my first ever design internship, it opened my eyes to how design plays out in the real world. I shadowed multiple meetings every day for months across different channels such as CPG, Loyalty, DTC and etc, to ensure a successful company like Peet’s stayed as one of the most well-known coffee brands in the nation. A design process goes through many stages to get approved to make sure whatever we put out is on brand and the most perfect and effective design it can be. Through Peets, I learned design is not just sitting in front of a computer on a design software, but it is interacting and finding ways to communicate why your designs work across everyone in the company. Peet’s have taught me a tremendous amount and I am forever grateful to the Creative Team.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}