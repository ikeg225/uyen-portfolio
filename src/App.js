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
          <Route path="/" element={<Projects />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
