import './App.css';
import Footer from './components/Footer';
//import Header from './components/Header';
import HeroSection from './pages/HeroSection';
import FeatureSection from './pages/FeatureSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
