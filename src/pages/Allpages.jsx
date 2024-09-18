import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Allpages = () => {
  return (
    <div className="w-[100%] lg:w-[80%] lg:ml-[20%]">
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default Allpages;
