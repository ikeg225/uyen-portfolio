import styles from '../css/Justworks.module.css';
import justworks from '../images/justworks.png';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import listPageDesktop from '../images/list-page-desktop.jpg';
import profilePageDesktop from '../images/profile-page-desktop.jpg';
import jwListPage from '../images/jw-list-page.gif';
import jwDetailPage from '../images/jw-detail-page.gif';
import jwListOrganization from '../images/jw-list-organization.png';
import jwListNoDepartment from '../images/jw-list-no-department.png';
import jwProfilePic from '../images/jw-profile-pic.jpg';
import jwMonogram from '../images/jw-monogram.jpg';
import jwSearch1 from '../images/jw-search-1.png';
import jwSearch2 from '../images/jw-search-2.png';
import jwProfilePage1 from '../images/jw-profile-page-1.png';
import jwProfilePage2 from '../images/jw-profile-page-2.png';
import jwReports1 from '../images/jw-reports-1.png';
import jwReports2 from '../images/jw-reports-2.png';
import jwReports3 from '../images/jw-reports-3.png';
import jwReports4 from '../images/jw-reports-4.png';
import personalInfo from '../images/personal-info.gif';
import contactInfo from '../images/contact-info.gif';

export default function Justworks() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Justworks</title>
                <meta name="description" content="Developed a mobile directory, streamlining access to important information for over 1000 companies and their employees." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img className={styles.imageDown} src={justworks} alt="Justworks Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.justworks}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div>
                                <h3>Role</h3>
                                <p>Product Design Intern</p>
                            </div>
                            <div>
                                <h3>Duration</h3>
                                <p>3 months</p>
                            </div>
                            <div>
                                <h3>Disciplines</h3>
                                <p>Product Design, User Research, User Interface, Interaction Design, Mobile Design</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>In Summer 2023, I interned at Justworks, a tech company that aims to level the playing field for small businesses. I designed an end-to-end project, seamlessly integrating a mobile directory into their new platform, enhancing internal communication for employees.</p>
                            <p>Additionally, I built design components for a smooth directory integration into the company's mobile product ecosystem.</p>
                        </div>
                    </div>
                    <h1>Justworks - Mobile Directory</h1>
                    <h3 className={styles.gray}>CONTEXT: GROWING PAINS OF A GROWING BUSINESS</h3>
                    <p>As a growing company, Justworks offers a simple and friendly platform helping businesses “manage, grow & run easily.” Justworks understand the growth pains of a growing company - onboarding new employees, streamlining communication, and ensuring all part of their company is well integrated and structured. This project focuses on streamlining communication between all employees.</p>
                    <hr className={styles.line}/>
                    <h3 className={styles.gray}>PROBLEM: WHY MOBILE DIRECTORY?</h3>
                    <p>Justworks offers a desktop directory that helps employees find the most important information about their co-workers. However, this information is not accessible as we realize employees are not always on their laptops. Having a mobile directory solves/help with:</p>
                    <ul>
                        <li>Efficient Communication: streamlines communication within a company by providing quick access to contact details reducing time and effort.</li>
                        <li>Accessibility: employees can access important contact information anytime, anywhere, making it easier to reach colleagues especially when working remotely or on the go.</li>
                        <li>Integration: Mobile directories can integrate with other communication tools and systems.</li>
                    </ul>
                    <br/>
                    <h3 className={styles.gray}>ULTIMATELY</h3>
                    <h1>How might we make and design our directory feature to be most relevant to mobile users?</h1>
                    <hr className={styles.line}/>
                    <h3 className={styles.gray}>EXPLORING EXISTING DESKTOP DIRECTORY</h3>
                    <div className={styles.imageAndContent}>
                        <div className={styles.image}>
                            <img src={listPageDesktop} alt="List Page Desktop" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.bold}>LIST PAGE</p>
                            <ul>
                                <li>Sorted by alphabetical order on departments</li>
                                <li>“No Department” is the section department bc of alphabetical order</li>
                                <li>Should sections that are “no department” be following alphabetically even though it is not as relevant as other departments?</li>
                                <li>Sort by ascending and descending order for Names, Department, Office, Manager</li>
                                <li>In the search bar “find people” can only search names, but not departments.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imageAndContent}>
                        <div className={styles.image}>
                            <img src={profilePageDesktop} alt="Profile Page Desktop" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.bold}>PROFILE PAGE</p>
                            <ul>
                                <li>Name, pronouns, role</li>
                                <li>Profile Picture</li>
                                <li>Work & Mobile phone numbers</li>
                                <li>Birthday, Start Date, and Office are grouped</li>
                                <li>Manager</li>
                                <li>Direct Report</li>
                                <li>Top corner, “Text me __'s contact info”</li>
                            </ul>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <h3 className={styles.gray}>ROUND 1: USER RESEARCH</h3>
                    <p className={styles.bold}>GOAL</p>
                    <p>Identifying user preferences, dislikes, and opportunities for enhancing existing directory features is essential. This process allows me to tailor and optimize features to better meet the needs of mobile users.</p>
                    <p className="italic">Conducted 7 sessions of unmoderated research on employees at companies between the sizes of 10 to 50 total employees.</p>
                    <div className={styles.prototypes}>
                        <div>
                            <img src={jwListPage} alt="List Page"/>
                            <p>List page prototype</p>
                        </div>
                        <div>
                            <img src={jwDetailPage} alt="Detail Page"/>
                            <p>Detail page prototype</p>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <h3 className={styles.gray}>FINDINGS: WHAT DIRECTORY FEATURES STAND OUT MOST AND BEHAVIORS?</h3>
                    <div className={styles.findingsWrapper}>
                        <div className={styles.findings}>
                            <ul>
                                <li>Information a person would need to know about their coworkers are the “basics”: name, role/department, contact info, manager</li>
                                <li>People use a phone directory for easy access and fast/direct communication</li>
                                <li>Most would use the search bar exclusively to find someone in the directory except when they 1. don't know who they are looking for 2. don't know how to spell a person's name</li>
                            </ul>
                        </div>
                        <div className={styles.notes}>
                            <div className={styles.stickyNote}>
                                <p>As long as there is a direct line of contact, most deem that as the most important information in a directory.</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>the “text me ___'s contact info” is a well liked feature from everyone</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>a directory is like having everyone's “digitalized business card”</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>“all you really need to know is how to contact them”</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>people would use the phone directory when they are out of office/away from their desk</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>people would use the phone directory when wanting to call someone so they can just click on someone's phone number and dials them on the spot</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>when looking for someone (i.e someone in a middle of a long list) one would most likely use the search bar</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>most would use the search bar exclusively and is their “go-to” when needing to find a specific person</p>
                            </div>
                            <div className={styles.stickyNote}>
                                <p>want: being able to sort through the whole directory of people instead of just people in a certain department</p>
                            </div>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <h3 className={styles.gray}>ITERATIONS OVER ITERATIONS...</h3>
                    <h1>List Page</h1>
                    <h3 className="bold">LIST ORGANIZATION</h3>
                    <div className={styles.prototypes}>
                        <div>
                            <img src={jwListOrganization} alt="List Organization"/>
                        </div>
                        <div>
                            <img src={jwListNoDepartment} alt="List No Department"/>
                        </div>
                    </div>
                    <br/>
                    <h3 className="bold">PROFILE ROW</h3>
                    <p>The list item for an employee should contain their picture, name, and job title. If they employee does not have a picture, then they should have a monogram with their first and last initials. This is consistent with the web version of the directory.</p>
                    <div className={styles.prototypes}>
                        <div>
                            <p className={styles.gray}>WITH PROFILE PIC</p>
                            <img src={jwProfilePic} alt="Profile Picture"/>
                        </div>
                        <div>
                            <p className={styles.gray}>WITHOUT PROFILE PIC: MONOGRAM</p>
                            <img src={jwMonogram} alt="Monogram"/>
                        </div>
                    </div>
                    <br/>
                    <h3 className="bold">SEARCH FUNCTION</h3>
                    <div className={styles.prototypes}>
                        <div>
                            <img src={jwSearch1} alt="Search Result Design"/>
                        </div>
                        <div>
                            <img src={jwSearch2} alt="Search Result Design"/>
                        </div>
                    </div>
                    <br/>
                    <h3 className="bold">INFINITE SCROLLING </h3>
                    <p>While the endless possibilities exist, loading all employees simultaneously poses a threat to user experience, potentially causing sluggishness or lag within the app. To tackle this issue, I collaborated closely with our engineering team to pinpoint the optimal solution.</p>
                    <p>For the initial page load, we've strategically chosen to load the first set of 50 employees. As users navigate through the list, and they approach the last 25 names displayed, our system initiates the loading of an additional 50 names. This sweet spot ensures that users experience a smooth and uninterrupted browsing experience, maintaining a harmonious balance between usability and performance.</p>
                    <hr className={styles.line}/>
                    <h1>Profile Page</h1>
                    <p>The profile page mirrors the structure of the list page, with information presented in distinct cards—a visual element that maintains consistency throughout the entire mobile app.</p>
                    <div className={styles.prototypes}>
                        <div>
                            <img src={jwProfilePage1} alt="Profile Page Design"/>
                        </div>
                        <div>
                            <img src={jwProfilePage2} alt="Profile Page Design"/>
                        </div>
                    </div>
                    <br/>
                    <h3 className="bold">MANAGERS & DIRECT REPORTS</h3>
                    <div className={styles.reports}>
                        <div>
                            <p className={styles.gray}>NO DIRECT REPORTS & MANAGER</p>
                            <img src={jwReports1} alt="No Direct Reports Design" />
                        </div>
                        <div>
                            <p className={styles.gray}>DIRECT REPORTS ONLY</p>
                            <img src={jwReports2} alt="Direct Reports Design" />
                        </div>
                        <div>
                            <p className={styles.gray}>MANAGER ONLY</p>
                            <img src={jwReports3} alt="Manager Only Design" />
                        </div>
                        <div>
                            <p className={styles.gray}>BOTH</p>
                            <img src={jwReports4} alt="All Designs" />
                        </div>
                    </div>
                    <br/>
                    <h3 className="bold">COMPONENTS IN USAGE OF DIFFERENT STATES</h3>
                    <p>In the process of refining the user experience, various scenarios were taken into account, including cases where certain information, such as birthdays or pronouns, can be hidden, or situations where an employee lacks direct reports or both a manager and direct reports. To enhance the design of these unique states and promote efficiency, I developed a comprehensive design system. This system not only streamlines the design process for these scenarios but also provides a versatile set of design components that can be leveraged for future use.</p>
                    <div className={styles.states}>
                        <p classNamr={styles.gray}>EMPLOYEES CAN HAVE UP TO THREE CONTACT NUMBERS</p>
                        <img src={personalInfo} alt="Personal Info Mobile Design"/>
                        <p classNamr={styles.gray}>EMPLOYEES CAN CHOOSE TO HIDE THEIR BIRTHDAY</p>
                        <img src={contactInfo} alt="Contact Ingo Design"/>
                    </div>
                    <h3 className="bold">TECHNICAL CONSTRAINTS & LESSON LEARNED</h3>
                    <div className={styles.learned}>
                        <div>
                            <div className={styles.blueBackground}>
                                <h1>🤓</h1>
                                <p>UNDERSTAND EXISTING DESIGN ECOSYSTEMS</p>
                            </div>
                            <p>A deep understanding of the existing framework is fundamental for achieving a seamless integration of new features and designs.</p>
                        </div>
                        <div>
                            <div className={styles.blueBackground}>
                                <h1>🚥</h1>
                                <p>NAVIGATING TECHNICAL CONSTRAINTS</p>
                            </div>
                            <p>Challenges like hidden states taught me how to creatively design within constraints while maintaining user-friendliness and functionality.</p>
                        </div>
                        <div>
                            <div className={styles.blueBackground}>
                                <h1>🧑🏻‍🤝‍🧑🏻</h1>
                                <p>COLLABORATION WITH ENGINEERS</p>
                            </div>
                            <p>Collaborating closely with engineers highlighted the profound impact that our design decisions have on the development process.</p>
                        </div>
                        <div>
                            <div className={styles.blueBackground}>
                                <h1>🔍</h1>
                                <p>FEEDBACK & RESEARCH DRIVEN ITERATIONS</p>
                            </div>
                            <p>Feedback from cross-functional teams, especially engineers, during design reviews.allowed me to balance feasibility, desirability, and viability, ensuring that our designs not only met user needs but could also be implemented effectively.</p>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <h1>A special thank you to....</h1>
                    <p>The mobile team within Justworks as well as my mentor and the product design department for guiding me through the project step by step! And a big thank you to New York City for all the fun times I had over the summer!</p>
                </div>
            </div>
            <Contact />
        </div>
    )
}