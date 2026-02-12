import React from 'react';
import styles from './Sidebar.module.css';
import { profile } from '../data';
import profileImg from '../assets/alex-portrait.jpeg';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.photoContainer}>
                <img
                    src={profileImg}
                    alt={profile.name}
                    className={styles.photo}
                />
            </div>

            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.title}>{profile.title}</p>

            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <span>📧</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div className={styles.contactItem}>
                    <span>📞</span>
                    <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
                <div className={styles.contactItem}>
                    <span>📍</span>
                    <span>{profile.location}</span>
                </div>
            </div>

            <div className={styles.socialLinks}>
                {profile.socials.linkedin && (
                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        LN
                    </a>
                )}
                {profile.socials.googleScholar && (
                    <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        GS
                    </a>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
