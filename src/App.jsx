import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import ContentArea from './components/ContentArea';
import styles from './App.module.css';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContentArea activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
