import Play from './components/Play';
import About from './components/About';
import Peets from './components/Peets';
import Header from './components/Header';
import Flower from './components/Flower';
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
          <Route path="/flower" element={<Flower />} />
          <Route path="/peets" element={<Peets />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
