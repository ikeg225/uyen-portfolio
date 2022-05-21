import logo from "../images/logo.png";
import { NavLink }from 'react-router-dom';
import linkedin from "../images/linkedin.png";
import hamburger from "../images/hamburger.png";
import instagram from "../images/instagram.png";
import styles from "../css/Header.module.css";

export default function Header() {
    const activeLink = ({ isActive }) => isActive ? `${styles.activeLink}` : '';

    return (
        <header className={styles.top}>
            <div className={styles.leftHeader}>
                <NavLink to="/uyen-portfolio/" className={activeLink}>projects</NavLink>
                <NavLink to="/uyen-portfolio/play/" className={activeLink}>play</NavLink>
                <NavLink to="/uyen-portfolio/about/" className={activeLink}>about</NavLink>
            </div>
            <div className={styles.middleHeader}>
                <img src={logo} width="50px"/>
            </div>
            <div className={styles.rightHeader}>
                <a href="https://www.instagram.com/pengwein/" target="_blank" rel="noopener noreferrer"><img src={instagram} height="30px" target="_blank" rel="noopener noreferrer"/></a>
                <a href="https://www.linkedin.com/in/uyen-phan-3a4699236/" target="_blank" rel="noopener noreferrer"><img src={linkedin} height="30px"/></a>
            </div>
            <div className={styles.hamburger}>
                <img src={hamburger} width="60px"/>
            </div>
        </header>
    )
}