import styles from '../css/Project.module.css';
import { NavLink } from 'react-router-dom';

export default function Project({img, name, description, url }) {
    return (
        <div className={styles.item}>
            <NavLink to={url}><img className={styles.image} src={img} alt=""/></NavLink>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}