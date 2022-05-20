import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import hamburger from "../images/hamburger.png";
import instagram from "../images/instagram.png";
import styles from "../css/Header.module.css";

export default function Header() {
    return (
        <header className={styles.top}>
            <div className={styles.leftHeader}>
                <a href="#">projects</a>
                <a href="#">play</a>
                <a href="#">about</a>
            </div>
            <div className={styles.middleHeader}>
                <img src={logo} width="50px"/>
            </div>
            <div className={styles.rightHeader}>
                <a href="#"><img src={instagram} height="30px"/></a>
                <a href="#"><img src={linkedin} height="30px"/></a>
            </div>
            <div className={styles.hamburger}>
                <img src={hamburger} width="60px"/>
            </div>
        </header>
    )
}