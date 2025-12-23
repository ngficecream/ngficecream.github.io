import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Flavours from './pages/Flavours';
import Franchise from './pages/Franchise';
import Stores from './pages/Stores';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/flavours" element={<Flavours />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/stores" element={<Stores />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
