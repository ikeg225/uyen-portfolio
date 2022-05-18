import styles from '../css/Project.module.css';

export default function Project({img, name, description }) {
    return (
        <div className={styles.item}>
            <img src={img}/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}