import styles from '../css/Play.module.css';
import playpeople from '../images/playpeople.png';

export default function Play() {
    return (
        <div className={styles.play}>
            <p className={styles.title}>Let's Have Fun!</p>
            <img className={styles.playpeople} src={playpeople} alt=""/>
        </div>
    )
}