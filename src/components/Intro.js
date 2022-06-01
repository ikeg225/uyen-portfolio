import styles from '../css/Intro.module.css';
import covertick from '../images/covertick.png';
import { useState, useEffect } from 'react';

import orange from '../images/orange.png';
import zigzagline from '../images/zigzagline.png';
import happyface from '../images/happyface.png';
import aboutstar from '../images/aboutstar.png';
import bluespikes from '../images/bluespikes.png';

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
                <img className={transition ? styles.imageHover : styles.image} src={covertick} alt=""/>
            </p>
            <p className={transition ? styles.lastnameHover : styles.lastname}>
                p<span className={transition ? styles.goneHover : styles.gone}>han</span>
            </p>
            <div className={styles.orangewrap}>
                <img src={orange} width="200px" className={styles.orange} alt=""/>
            </div>
            <img src={zigzagline} width="150px" className={styles.zigzagline} alt=""/>
            <img src={happyface} width="90px" className={styles.happyface} alt=""/>
            <img src={aboutstar} width="75px" className={styles.aboutstar} alt=""/>
            <img src={bluespikes} width="100px" className={styles.bluespikes} alt=""/>
        </div>
    )
}