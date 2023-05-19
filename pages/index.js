/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { generateProfile } from "../lib/profileUtils";
import ProfileList from "../lib/components/ProfileList/ProfileList";
import Header from "../lib/components/Header/Header";
import Footer from "../lib/components/Footer/Footer";

const Home = () => {
    const [holder, setHolder] = useState();
    const [profiles, setProfiles] = useState();
    const searchRef = useRef(null)

    useEffect(() => {
        axios
            .get("https://randomuser.me/api?results=20")
            .then((res) => {
                console.log(res.data)
                setHolder(res.data.results.map(generateProfile));
                setProfiles(res.data.results.map(generateProfile));
            })
            .catch((err) => {
                console.error(err);
                alert("Profile request failed");
            });
    }, []);

    if (!profiles) return <h1>Loading profiles...</h1>;

    return (
        <>
            <div className="container">
                <Header title={"Users"} ref={searchRef} onChange={(e)=>{
                    searchRef.current = e.target.value
                    if(e.target.value === '') {
                        setProfiles(holder)
                    }
                }} onSubmit={(event)=>{
                    event.preventDefault()
                    const newData = holder.filter(item => {      
                        const itemData = `${item.name} ${item.age} ${item.email.replace('@example.com', '')} ${item.gender} ${item.location}`.toUpperCase();
                        
                         const textData = searchRef.current.toUpperCase();
                          
                         return itemData.indexOf(textData) > -1;    
                      });
                    setProfiles(newData)
                }}/>
                {profiles.length === 0 ? <h1> {'No results :( '}</h1> : <ProfileList profiles={profiles} />}
                
            </div>
            <Footer/>
        </>
    );
};

export default Home;
