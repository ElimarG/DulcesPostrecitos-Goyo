import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import Navbar from './components/NavBar';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
  </Router>
  );
}

export default App;
