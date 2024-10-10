import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Home from "./components/Home/Home";
import About from './components/About/About';
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
