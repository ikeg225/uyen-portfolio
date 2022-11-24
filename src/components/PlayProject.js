import styles from '../css/PlayProject.module.css';
import { NavLink } from 'react-router-dom';

export default function PlayProject({image, title, description, link }) {
    return (
        <div className={styles.projectplay}>
            <div className={styles.image}>
                <img src={image} />
            </div>
            <div className={styles.project}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.projectdescription}>
                    <p className={styles.description}>{description}</p>
                    <NavLink to={link} className={styles.button}>view more</NavLink>
                </div>
            </div>
        </div>
    )
}