import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    const links = ['About', 'Pricing', 'Contact', 'Patrons', 'Donate']
    return (
        <footer>
            <h3 className={styles.company}> Company </h3>
            <h4 className={styles.motive}> Non-profit organization dedicated to a goal for the greater good</h4>
            {links.map((item, i)=>{
                return (
                    <a className={styles.link} key={i}> {item} </a>
                )
            })}
        </footer>
    )
}

export default Footer;