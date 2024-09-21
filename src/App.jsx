import React from 'react';
import './App.css';
import Allpages from './pages/Allpages';
import Fixedside from './sticky/Fixedside';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import HamburgerMenu from './sticky/Hamburger';
import Footer from './sticky/Footer';
import ScrollToTop from './pages/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
      <Analytics />
    </Router>
  );
}

// Separate the component that uses useLocation hook
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Check if it's the homepage

  return (
    <div className='container w-full'>
      <div className="flex">
        <Fixedside />
        <HamburgerMenu />
        <Allpages />
      </div>
      {!isHomePage && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

export default App;
