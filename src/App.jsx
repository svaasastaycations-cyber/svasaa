import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Farmstays from './pages/Farmstays';
import OldTown from './pages/OldTown';
import LotusBliss from './pages/LotusBliss';
import EventSpace from './pages/EventSpace';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full bg-svaasa-black selection:bg-svaasa-white selection:text-svaasa-black flex flex-col text-svaasa-white">
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmstays" element={<Farmstays />} />
            <Route path="/farmstays/old-town" element={<OldTown />} />
            <Route path="/farmstays/lotus-bliss" element={<LotusBliss />} />
            <Route path="/events" element={<EventSpace />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
