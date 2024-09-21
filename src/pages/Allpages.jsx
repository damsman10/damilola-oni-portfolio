import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import NotFound from './NotFound';
import Services from './Services';
import PortfolioDetails from './PortfolioDetails';

const Allpages = () => {
  return (
    <div className="w-[100%] lg:w-[80%] lg:ml-[20%]">
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Allpages;
