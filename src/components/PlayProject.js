import styles from '../css/PlayProject.module.css';

export default function PlayProject({image, title, description, link }) {
    return (
        <div className={styles.projectplay}>
            <div className={styles.image}>
                <img src={image} />
            </div>
            <div className={styles.project}>
                <p className={styles.title}>{title}</p>
                <div className={styles.projectdescription}>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.button} href={link} target="_blank" rel="noreferrer">view more</a>
                </div>
            </div>
        </div>
    )
}