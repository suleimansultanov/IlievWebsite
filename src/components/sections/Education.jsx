import React from 'react';
import { education, fellowshipsHonors } from '../../data';
import styles from './Sections.module.css';

const Education = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.timeline}>
                {education.map((edu, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineHeader}>
                            <h3 className={styles.cardTitle}>{edu.role}</h3>
                            <span className={styles.date}>{edu.year}</span>
                        </div>
                        <p className={styles.cardSubtitle}>{edu.institution}</p>
                        {edu.details && <p className={styles.detailList}>{edu.details}</p>}
                    </div>
                ))}
            </div>

            <h2 className={styles.sectionTitle}>Fellowships</h2>
            <ul className={styles.list}>
                {fellowshipsHonors.map((honor, index) => (
                    <li key={index} className={styles.listItem}>{honor}</li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
