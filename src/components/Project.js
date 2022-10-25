import styles from '../css/Project.module.css';

export default function Project({img, name, description, imgmobile }) {
    return (
        <div className={styles.item}>
            <img className={styles.image} src={img} alt=""/>
            <img className={styles.imgmobile} src={imgmobile} alt=""/>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}