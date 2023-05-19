import React, { useState, useEffect } from "react";
import { PROFIILE_PARAMS } from "../../profileUtils";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import styles from './ProfileList.module.css';

const ProfileList = ({ profiles }) => {
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setCurrentPage(1)
        let numOfPages = Math.ceil(profiles.length / 5)
        let i = 0;
        let pages = []
        while (i < numOfPages) {
            pages.push(i + 1)
            i++
        }
        setPages(pages)
    }, [profiles])

    return (
        <div>
            {/* <div
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                {PROFIILE_PARAMS.map(({ columnTitle }, i) => (
                    <h3 key={i} style={{ width: 200, textAlign: "center" }}>
                        {columnTitle}
                    </h3>
                ))}
            </div> */}
            {profiles.slice(currentPage * 5 - 5, currentPage * 5).map((prof, i) => (
                <ProfilePreview key={i} profile={prof} />
            ))}
            <div className={styles.pages}>
                <button 
                className={styles.pageButton} 
                style={{color: '#39ad58', borderWidth: 0, fontSize: 20}}
                onClick={()=>{
                    setCurrentPage(currentPage-1)
                }}
                disabled={currentPage === 1 ? true: false}> {'<'}
                </button>
                
                {pages.map((item, i) => {
                    return <button key={i} onClick={() => { setCurrentPage(item) }} className={styles.pageButton} 
                    style={{ 
                             backgroundColor: currentPage === item ? '#39ad58' : 'white', 
                             color: currentPage === item ? 'white' : 'black' 
                          }}> {item}</button>
                })}

                <button 
                className={styles.pageButton} 
                style={{color: '#39ad58', borderWidth: 0, fontSize: 20}}
                onClick={()=>{
                    setCurrentPage(currentPage+1)
                }} 
                disabled={currentPage === pages[pages.length-1] ? true: false}> 
                {'>'}
                </button>
            </div>
        </div>
    );
};

export default ProfileList;
