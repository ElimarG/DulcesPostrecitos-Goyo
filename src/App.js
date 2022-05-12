import React from 'react';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar />
    <Hero greeting="Descubrir las delicias de nuestros productos" />
    <ItemListContainer />
    <ItemDetailContainer productId={1} />
    </>
  );
}

export default App;
