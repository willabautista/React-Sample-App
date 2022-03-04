import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Attributes from './components/pages/Attributes';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/attributes' element={<Attributes />} />
                    <Route path='/events' element={<Home />} />
                    <Route path='/purchases' element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;