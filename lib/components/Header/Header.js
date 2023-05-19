import React, {forwardRef} from "react";
import Search from "../Search/Search";
import styles from './Header.module.css';

const Header = forwardRef(({ title, onChange, onSubmit}, ref) => {
    return (
        <div className={styles.header}>
            <h2 className={styles.headerTitle}> {title} </h2>
            <Search change={onChange} submit={onSubmit} ref={ref}/>
        </div>
    )
})

export default Header;