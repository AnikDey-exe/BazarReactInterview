import React from "react";
import Link from "next/link";
import styles from './ProfilePreview.module.css';

const ProfilePreview = ({ profile }) => {
    return (
        <div className={styles.profile}>
            <img
                src={profile['image']}
                className={styles.thumbnail} />
            <div
                className={styles.infoHolder}
            >
                {/* {PROFIILE_PARAMS.map(({ key }, i) => ( */}
                <Link href={{
                    pathname: '/details/details',
                    query: {
                        name: profile['name'],
                        image: profile['image'],
                        email: profile['email'],
                        number: profile['number'],
                        age: profile['age'],
                        gender: profile['gender'],
                        location: profile['location']
                    }
                }} rel="noopener noreferrer" target="_blank" className={styles.link}>
                    <span className={styles.title}>
                        {profile['name']}, {profile['age']}, {profile['gender'] === 'male' ? 'M': 'F'}
                    </span>
                </Link>
                <span className={styles.email}>
                    {profile['email']}
                </span>
                <span className={styles.number}>
                    {profile['number']}
                </span>

                {/* // ))} */}
            </div>
        </div>
    );
};

export default ProfilePreview;
