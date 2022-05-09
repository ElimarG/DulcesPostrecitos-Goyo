import React from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
        <div className="hero-area hero-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center mt-180 mb-180">
                        <div className="hero-text">
                            <div className="hero-text-tablecell">
                                <p className="subtitle">Te invitamos a</p>
                                <h1>{greeting}</h1>
                                <div className="hero-btns">
                                    <a href="/" className="boxed-btn">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="product-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">	
                            <h3><span className="orange-text">Nuestros</span> Productos</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ItemList />
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default ItemListContainer;