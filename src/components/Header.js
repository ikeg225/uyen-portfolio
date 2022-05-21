import logo from "../images/logo.png";
import { NavLink }from 'react-router-dom';
import linkedin from "../images/linkedin.png";
import hamburger from "../images/hamburger.png";
import instagram from "../images/instagram.png";
import styles from "../css/Header.module.css";
import React, { useState } from 'react';

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
                <NavLink to="/uyen-portfolio/" className={activeLink}>projects</NavLink>
                <NavLink to="/uyen-portfolio/play/" className={activeLink}>play</NavLink>
                <NavLink to="/uyen-portfolio/about/" className={activeLink}>about</NavLink>
            </div>
            <div className={styles.middleHeader}>
                <img src={logo} width="50px"/>
            </div>
            <div className={active ? `${styles.rightHeaderActive}` : `${styles.rightHeader}`} onClick={deActivate}>
                <a href="https://www.instagram.com/pengwein/" target="_blank" rel="noopener noreferrer"><img src={instagram} height="30px" target="_blank" rel="noopener noreferrer"/></a>
                <a href="https://www.linkedin.com/in/uyen-phan-3a4699236/" target="_blank" rel="noopener noreferrer"><img src={linkedin} height="30px"/></a>
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