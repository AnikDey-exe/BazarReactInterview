import React from "react";
import { useRouter } from "next/router";
import styles from './details.module.css'

const Details = () => {
    const router = useRouter();
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} style={{position: 'absolute'}}/>
                <img
                src={router.query.image}
                className={styles.thumbnail} />
                <div className={styles.aboutHolder}>
                    <h2 className={styles.name}>
                        {router.query.name}, {router.query.age} 
                        <span className={styles.occupation}>• Analyst</span>
                    </h2>
                    <span className={styles.location}> 📍   {router.query.location}  </span>
                </div>
                <div className={styles.contactHolder}>
                    <span className={styles.contact}> ✉ {router.query.email}</span>
                    <span className={styles.contact}>	&#9742; {router.query.number}</span>
                </div>
                <div className={styles.bioHolder}>
                    <span className={styles.bioHeading}> ABOUT </span>
                    <p className={styles.bioDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
        </>
    )
}

export default Details;