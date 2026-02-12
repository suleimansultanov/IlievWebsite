import React from 'react';
import { publications } from '../../data';
import styles from './Sections.module.css';

const Publications = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Selected Publications</h2>
            <ul className={styles.list}>
                {publications.map((pub, index) => (
                    <li key={index} className={styles.listItem}>
                        {pub}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;
