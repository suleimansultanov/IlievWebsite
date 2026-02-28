import React from 'react';
import { consulting } from '../../data';
import styles from './Sections.module.css';
import dnasoundLogo from '../../assets/dnasound-logo.png';

const Consulting = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.consultingSection} style={{ borderBottom: 'none' }}>
                <h1 className={styles.sectionTitle} style={{ borderBottom: 'none', marginBottom: 0 }}>{consulting.header.title}</h1>
                <h3 className={styles.cardTitle} style={{ fontSize: '1.3rem', marginTop: '0.5rem' }}>{consulting.header.subtitle}</h3>
                <h4 className={styles.cardSubtitle} style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>{consulting.header.name}</h4>
                <p className={styles.paragraph}>{consulting.header.description}</p>
                <ul className={styles.list}>
                    {consulting.header.list.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph}>{consulting.header.closing}</p>
            </div>

            <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                <img
                    src={dnasoundLogo}
                    alt="DNASound Logo"
                    style={{ height: '110px', width: 'auto', maxWidth: '100%' }}
                />
            </div>

            <div className={styles.consultingSection}>
                <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{consulting.dnasound.title}</h2>
                <h4 className={styles.cardSubtitle} style={{ fontWeight: 'bold' }}>{consulting.dnasound.subtitle}</h4>
                <p className={styles.paragraph}>{consulting.dnasound.description}</p>
                <ul className={styles.list}>
                    {consulting.dnasound.list.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph}>
                    {consulting.dnasound.closing.split('www.dnasound.com')[0]}
                    <a href={consulting.dnasound.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        www.dnasound.com
                    </a>
                </p>
            </div>

            <div className={styles.consultingSection}>
                <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{consulting.domains.title}</h2>
                <div className={styles.domainsContainer}>
                    {consulting.domains.items.map((domain, index) => (
                        <div key={index} className={styles.domainItem} style={{ marginBottom: '1.5rem' }}>
                            <h3 className={styles.cardTitle}>{domain.title}</h3>
                            <p className={styles.paragraph}>{domain.description}</p>
                            <ul className={styles.list}>
                                {domain.list.map((item, idx) => (
                                    <li key={idx} className={styles.listItem}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.paragraph} style={{ fontStyle: 'italic', marginTop: '0.5rem', marginBottom: 0 }}>{domain.focus}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.consultingSection}>
                <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{consulting.engagement.title}</h2>
                <p className={styles.paragraph}>{consulting.engagement.description}</p>
                <ul className={styles.list}>
                    {consulting.engagement.list.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph} style={{ fontStyle: 'italic' }}>{consulting.engagement.closing}</p>
            </div>

            <div className={styles.consultingSection}>
                <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{consulting.philosophy.title}</h2>
                <p className={styles.paragraph}>{consulting.philosophy.description}</p>
                <ul className={styles.list}>
                    {consulting.philosophy.list.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
                <p className={styles.paragraph}>
                    {consulting.philosophy.closing.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {i === 1 ? <strong>{line}</strong> : line}
                            {i === 0 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>

            <div className={styles.consultingSection}>
                <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{consulting.contact.title}</h2>
                <p className={styles.paragraph}>{consulting.contact.description}</p>
            </div>
        </div>
    );
};

export default Consulting;
