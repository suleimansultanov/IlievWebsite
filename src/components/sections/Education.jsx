import React from 'react';
import { education, awards, grants } from '../../data';
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

            <h2 className={styles.sectionTitle}>Fellowships & Honors</h2>
            <ul className={styles.list}>
                {awards.map((award, index) => (
                    <li key={index} className={styles.listItem}>{award}</li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>Grants</h2>
            <ul className={styles.list}>
                {grants.map((grant, index) => (
                    <li key={index} className={styles.listItem}>{grant}</li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
