import React from 'react';
import CartProvider from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import Navbar from './components/NavBar';
import About from './views/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Order from './components/Order';
import Page404 from './views/Page404';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Order />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;
