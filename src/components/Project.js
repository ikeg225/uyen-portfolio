import styles from '../css/Project.module.css';
import { NavLink } from 'react-router-dom';

export default function Project({img, name, description, url, outbound }) {
    return (
        <div className={styles.item}>
            {outbound && <a href={url} target="_blank" rel="noopener noreferrer"><img className={styles.image} src={img} alt=""/></a>}
            {!outbound && <NavLink to={url}><img className={styles.image} src={img} alt=""/></NavLink>}
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}