import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from './data/data.js';

const ItemList = () => {
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
        products.map((product) => {
            return (
                <div className="col-lg-4 col-md-6 text-center" key={product.id}>
                    <Item
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        stock={product.stock}
                        detail={product.detail}                  
                    />
                </div>
            );
        })
    );
  };
  
  export default ItemList;