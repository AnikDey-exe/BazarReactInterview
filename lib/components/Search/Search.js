import React, {forwardRef} from "react";
import styles from './Search.module.css';


const Search = forwardRef(({change, submit}, ref) => {
    return (
        <form onSubmit={submit} className={styles.searchContainer}>
            <input type="search" onChange={change} ref={ref} className={styles.searchBar} placeholder="Search"></input>
            <input type="submit" value="&#x1F50E;&#xFE0E;" className={styles.searchButton}></input>
        </form>
    )
})

export default Search;