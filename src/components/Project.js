import styles from '../css/Project.module.css';
import orangerect from '../images/orangerect.jpg';

export default function Project({img, name, description, imgmobile }) {
    return (
        <div className={styles.item}>
            <img className={styles.orange} src={orangerect}/>
            <img className={styles.image} src={img}/>
            <img className={styles.imgmobile} src={imgmobile}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}