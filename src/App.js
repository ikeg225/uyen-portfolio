import './App.css';
import Play from './components/Play';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/uyen-portfolio/" element={<Projects />} />
          <Route path="/uyen-portfolio/play/" element={<Play />} />
          <Route path="/uyen-portfolio/about/" element={<About />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
