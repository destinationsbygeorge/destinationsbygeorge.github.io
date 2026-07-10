import { useState, useCallback } from 'react';
import VideoBanner from './components/VideoBanner';
import Advantages from './components/Advantages';
import MyProcess from './components/MyProcess';
import ProcessHow from './components/ProcessHow';
import ProcessService from './components/ProcessService';
import About from './components/About';
import Inquire from './components/Inquire';
import './App.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleVideoLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <div className="loading-screen"><div className="loading-spinner" /></div>}
      <div className="site" style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <VideoBanner onVideoLoaded={handleVideoLoaded} />
        <Advantages />
        <MyProcess />
        <ProcessHow />
        <ProcessService />
        <About />
        <Inquire />
      </div>
    </>
  );
}
