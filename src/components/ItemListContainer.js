import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const ItemListContainer = ({ greeting }) => {
    return (
	    <div className="hero-area hero-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 offset-lg-2 text-center">
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
    );
  };
  
  export default ItemListContainer;