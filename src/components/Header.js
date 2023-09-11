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
        <div className="limitWidth">
            <header className={styles.top}>
                <div className={styles.leftHeader}>
                    <NavLink to="/"><img src={logo} width="50px" alt="Uyen Phan Logo"/></NavLink>
                </div>
                <div className={active ? `${styles.rightHeaderActive}` : `${styles.rightHeader}`} onClick={deActivate}>
                    <NavLink to="/" className={activeLink}>PROJECTS</NavLink>
                    <NavLink to="/play" className={activeLink}>PLAY</NavLink>
                    <NavLink to="/about" className={activeLink}>ABOUT</NavLink>
                </div>
                <div className={styles.hamburger}>
                    <div className={styles.hamburger} onClick={hamburgerMode}>
                        <span className={active ? `${styles.barLeft}` : `${styles.bar}`}></span>
                        <span className={active ? `${styles.barGone}` : `${styles.bar}`}></span>
                        <span className={active ? `${styles.barRight}` : `${styles.bar}`}></span>
                    </div>
                </div>
            </header>
        </div>
    )
}