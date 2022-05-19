import styles from '../css/Project.module.css';

export default function Project({img, name, description }) {
    return (
        <div className={styles.item}>
            <img src={img}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}