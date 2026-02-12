import React from 'react';
import { experience, teaching, service } from '../../data';
import styles from './Sections.module.css';

const Experience = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Professional Experience</h2>
            <div className={styles.timeline}>
                {experience.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineHeader}>
                            <h3 className={styles.cardTitle}>{job.role}</h3>
                            <span className={styles.date}>{job.period}</span>
                        </div>
                        <p className={styles.cardSubtitle}>{job.institution}</p>
                        {job.details && (
                            <ul className={styles.detailList}>
                                {job.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <h2 className={styles.sectionTitle}>Teaching Experience</h2>
            <div className={styles.grid}>
                {teaching.map((role, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{role.role}</h3>
                        <p className={styles.cardSubtitle}>{role.institution}</p>
                        <ul className={styles.compactList}>
                            {role.courses.map((course, idx) => (
                                <li key={idx}>{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2 className={styles.sectionTitle}>Service & Committees</h2>
            <ul className={styles.list}>
                {service.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
