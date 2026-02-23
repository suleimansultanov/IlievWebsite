import React from 'react';
import { awards } from '../../data';
import styles from './Sections.module.css';

const Awards = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Fellowships Honors Awards</h2>
            <ul className={styles.list}>
                {awards.map((award, index) => (
                    <li key={index} className={styles.listItem}>{award}</li>
                ))}
            </ul>
        </div>
    );
};

export default Awards;
