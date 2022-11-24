import styles from '../css/ReCards.module.css';

export default function ReCards({ title, content }) {
    return (
        <div className={styles.recards}>
            <div className={styles.top}>
                <p className="bold">{title}</p>
            </div>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: content}} className={styles.divtag} />
            </div>
        </div>
    )
}