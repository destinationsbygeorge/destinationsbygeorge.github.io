import VideoBanner from './components/VideoBanner';
import Advantages from './components/Advantages';
import MyProcess from './components/MyProcess';
import About from './components/About';
import Inquire from './components/Inquire';
import './App.css';

export default function App() {
  return (
    <div className="site">
      <VideoBanner />
      <Advantages />
      <MyProcess />
      <About />
      <Inquire />
    </div>
  );
}
