import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Scenarios from './pages/Scenarios';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scenarios" element={<Scenarios />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
