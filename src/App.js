import React from 'react';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Descubrir las delicias de nuestros productos"/>
    </>
  );
}

export default App;
