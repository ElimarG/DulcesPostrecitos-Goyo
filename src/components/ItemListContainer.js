import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { productList } from './data/data.js';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(productList);
            }, 2000);
          });

          getProducts.then((result) => {
            setProducts(result);
          });
    }, []);

    return (
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
                    <ItemList products={products} />
                </div>
            </div>
        </div>
    );
  };
  
  export default ItemListContainer;