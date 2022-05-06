import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import cake from './images/cake.png';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} productos`);
    };

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
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="single-product-item">
                            <div className="product-image">
                                <a href="/"><img src={cake} alt="" /></a>
                            </div>
                            <h3>Torta</h3>
                            <p className="product-price"><span>8 porciones</span> 2000$ </p>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default ItemListContainer;