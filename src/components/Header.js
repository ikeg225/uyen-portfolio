import logo from "../images/logo.png";
import { NavLink }from 'react-router-dom';
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import styles from "../css/Header.module.css";
import { useState } from 'react';

export default function Header() {
    const activeLink = ({ isActive }) => isActive ? `${styles.activeLink}` : '';
    const [active, setActive] = useState(false);

    function deActivate() {
        if (active) {
            setActive(false)
            document.body.style.overflow = "visible";
        }
    }

    function hamburgerMode() {
        if (active) {
            setActive(false)
            document.body.style.overflow = "visible";
        } else {
            setActive(true)
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <header className={styles.top}>
            <div className={active ? `${styles.leftHeaderActive}` : `${styles.leftHeader}`} onClick={deActivate}>
                <NavLink to="/" className={activeLink}>projects</NavLink>
                <NavLink to="/play" className={activeLink}>play</NavLink>
                <NavLink to="/about" className={activeLink}>about</NavLink>
            </div>
            <div className={styles.middleHeader}>
                <NavLink to="/"><img src={logo} width="50px" alt="Uyen Phan Logo"/></NavLink>
            </div>
            <div className={active ? `${styles.rightHeaderActive}` : `${styles.rightHeader}`} onClick={deActivate}>
                <a href="https://www.instagram.com/from.uyen/" target="_blank" rel="noopener noreferrer"><img src={instagram} height="30px" target="_blank" rel="noopener noreferrer" alt="Instagram Account"/></a>
                <a href="https://www.linkedin.com/in/uyen-phan-3a4699236/" target="_blank" rel="noopener noreferrer"><img src={linkedin} height="30px" alt="Linkedin Account"/></a>
            </div>
            <div className={styles.hamburger}>
                <div className={styles.hamburger} onClick={hamburgerMode}>
                    <span className={active ? `${styles.barLeft}` : `${styles.bar}`}></span>
                    <span className={active ? `${styles.barGone}` : `${styles.bar}`}></span>
                    <span className={active ? `${styles.barRight}` : `${styles.bar}`}></span>
                </div>
            </div>
        </header>
    )
}