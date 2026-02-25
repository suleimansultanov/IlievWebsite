import React from 'react';
import { patents } from '../../data';
import styles from './Sections.module.css';

const Patents = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Patents</h2>
            <div className={styles.timeline}>
                {patents.map((patent, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineHeader}>
                            <h3 className={styles.cardTitle}>
                                {patent.link ? (
                                    <a href={patent.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        {patent.title}
                                    </a>
                                ) : (
                                    patent.title
                                )}
                            </h3>
                            <span className={styles.date}>{patent.dateIssued}</span>
                        </div>
                        <p className={styles.cardSubtitle}>
                            {patent.type ? `Type: ${patent.type} | ` : ''}
                            {patent.patentNumber}
                        </p>
                        {patent.inventors && (
                            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                                <strong>{patent.type ? 'Authors:' : 'Inventors:'}</strong> {patent.inventors}
                            </p>
                        )}
                        {patent.assignee && (
                            <p style={{ marginTop: '0.25rem', fontSize: '0.95rem' }}>
                                <strong>{patent.type ? 'Office:' : 'Assignee:'}</strong> {patent.assignee}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patents;
