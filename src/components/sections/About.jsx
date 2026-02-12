import React from 'react';
import { profile, languages, memberships } from '../../data';
import styles from './Sections.module.css'; // Shared styles

const About = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Qualification Highlights</h2>
            <ul className={styles.list}>
                {profile.highlights.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>Current Academic Positions</h2>
            <div className={styles.grid}>
                {profile.currentPositions.map((pos, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{pos.role}</h3>
                        <p className={styles.cardSubtitle}>{pos.institution}</p>
                        {pos.url && (
                            <a href={pos.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                View Profile →
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <h2 className={styles.sectionTitle}>Languages</h2>
                    <ul className={styles.simpleList}>
                        {languages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.sectionTitle}>Professional Memberships</h2>
                    <ul className={styles.simpleList}>
                        {memberships.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
