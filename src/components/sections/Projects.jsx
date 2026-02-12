import React from 'react';
import { projects } from '../../data';
import styles from './Sections.module.css';

const Projects = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Research Projects & Grants</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        {project.period && <p className={styles.date}>{project.period}</p>}
                        {project.institution && <p className={styles.cardSubtitle}>{project.institution}</p>}
                        {project.funding && <p className={styles.detailList}>Funding: {project.funding}</p>}
                        {project.details && <p className={styles.detailList}>{project.details}</p>}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ marginTop: '1rem' }}>
                                View Project →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
