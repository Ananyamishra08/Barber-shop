import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavbarComponent from './components/NavbarComponent.jsx';
import HeroComponent from './components/HeroComponent.jsx';
import ScrollTriggered from './components/ScrollTriggered.jsx';
import Loading from './utils/Loading.jsx';
// import ServicesComponent from './components/ServicesComponent.jsx';
import PortfolioComponent from './components/PortfolioComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './themes.css';
import CustomerReview from './components/CustomerReview.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Moved before the if (loading) check

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <NavbarComponent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <HeroComponent />
      <ScrollTriggered />
      <CustomerReview />
      {/* <ServicesComponent /> */}
      <PortfolioComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;