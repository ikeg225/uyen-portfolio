import styles from '../css/Project.module.css';
import { NavLink } from 'react-router-dom';

export default function Project({img, name, subtitle, keywords, description, url }) {
    return (
        <div className={styles.item}>
            <NavLink to={url}><img className={styles.image} src={img} alt=""/></NavLink>
            <div className={styles.content}>
                <p className={styles.keywords}>{keywords}</p>
                <NavLink to={url}><h1 className={styles.name}>{name}</h1></NavLink>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    )
}