import Re from './components/Re';
import Play from './components/Play';
import About from './components/About';
import Peets from './components/Peets';
import Header from './components/Header';
import Flower from './components/Flower';
import Projects from './components/Projects';
import Peachtober from './components/Peachtober';
import SniffSniff from './components/SniffSniff';
import ScrollToTop from './components/ScrollToTop';
import OpenProject from './components/OpenProject';
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
          <Route path="/re" element={<Re />} />
          <Route path="/peachtober" element={<Peachtober />} />
          <Route path="/open-project" element={<OpenProject />} />
          <Route path="/sniff-sniff" element={<SniffSniff />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
