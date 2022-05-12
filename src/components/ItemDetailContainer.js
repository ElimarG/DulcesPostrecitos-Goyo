import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productList } from './data/data.js';

const ItemDetailContainer = ({ productId }) => {
    const [item, setItems] = useState({});

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(productList);
            }, 2000);
          });

          getItem.then(() => {
            setItems(productList.find(p => p.id === productId));
          });
    }, [productId]);

    return (
        <ItemDetail item={item} />
    );
  };
  
  export default ItemDetailContainer;