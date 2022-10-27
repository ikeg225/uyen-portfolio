import styles from '../css/Project.module.css';

export default function Project({img, name, description }) {
    return (
        <div className={styles.item}>
            <img className={styles.image} src={img} alt=""/>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}