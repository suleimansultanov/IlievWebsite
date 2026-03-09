import React from 'react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Education from './sections/Education';
import Patents from './sections/Patents';
import Awards from './sections/Awards';
import Consulting from './sections/Consulting';

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
            case 'consulting':
                return <Consulting />;
            default:
                return <About />;
        }
    };

    return (
        <main style={{ flex: 1, paddingBottom: '3rem' }}>
            {/* The key prop forces a re-mount on tab change, triggering the section entry animation */}
            <div key={activeTab}>
                {renderContent()}
            </div>
        </main>
    );
};

export default ContentArea;
