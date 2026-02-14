import React from 'react';
import { publications } from '../../data';
import styles from './Sections.module.css';

const Publications = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Selected Publications</h2>
            <div className={styles.scrollableContainer}>
                <ol className={styles.numberedList}>
                    {publications.map((pub, index) => (
                        <li key={index} className={styles.listItem}>
                            {pub}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Publications;
