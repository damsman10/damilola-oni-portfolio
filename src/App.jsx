import './App.css';
import Allpages from './pages/Allpages';
import Fixedside from './sticky/Fixedside';
import { BrowserRouter as Router } from 'react-router-dom';
import HamburgerMenu from './sticky/Hamburger';

function App() {
  return (
    <Router>
      <div className='container w-full flex'>
        <Fixedside />
        <HamburgerMenu />
        <Allpages />
      </div>
    </Router>
  );
}

export default App;
