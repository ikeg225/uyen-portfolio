import styles from '../css/Intro.module.css';
import covertick from '../images/covertick.png';
import { useState, useEffect } from 'react';

export default function Intro() {
    const [transition, setTransition] = useState(false)
    const [up, setUp] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTransition(true)
        }, "1500")
    
        setTimeout(() => {
            setUp(true)
        }, "3500")
    }, [])
      
    return (
        <div className={up ? styles.introUp : styles.intro}>
            <p className={transition ? styles.firstnameHover : styles.firstname}>
                U<span className={transition ? styles.goneHover : styles.gone}>yen</span>
                <img className={transition ? styles.imageHover : styles.image} src={covertick}/>
            </p>
            <p className={transition ? styles.lastnameHover : styles.lastname}>
                p<span className={transition ? styles.goneHover : styles.gone}>han</span>
            </p>
        </div>
    )
}