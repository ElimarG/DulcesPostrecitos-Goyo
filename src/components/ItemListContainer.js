import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productList } from './data/data.js';
import Breadcrumb from './Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false);
                const prodId = categoryId ? productList.filter((item) => item.category === categoryId) : productList;
                resolve(prodId);
            }, 2000);
          });

          getProducts.then((result) => {
            setProducts(result);
          });
    }, [categoryId]);

    return (
        <>
        <Breadcrumb title="Descubrir las delicias de nuestros productos" description="Te invitamos a" />
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
                    { loading ? 
                    <div className="loader">
                        <div className="loader-inner">
                            <div className="circle"></div>
                        </div>
                    </div> :
                    <ItemList products={products} /> }
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default ItemListContainer;