import React from 'react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Education from './sections/Education';
import Patents from './sections/Patents';
import Awards from './sections/Awards';

const ContentArea = ({ activeTab }) => {
    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <About />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'publications':
                return <Publications />;
            case 'education':
                return <Education />;
            case 'patents':
                return <Patents />;
            case 'awards':
                return <Awards />;
            default:
                return <About />;
        }
    };

    return (
        <main style={{ flex: 1, paddingBottom: '3rem' }}>
            {renderContent()}
        </main>
    );
};

export default ContentArea;
