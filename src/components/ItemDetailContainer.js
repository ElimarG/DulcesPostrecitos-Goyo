import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { productList } from './data/data.js';
import Breadcrumb from './Breadcrumb';

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
              setLoading(false)
              const itemId = productList.find((prodId) => prodId.id === parseInt(id));
              resolve(itemId);
            }, 2000);
          });

          getItem.then((result) => {
            setItems(result);
          });
    }, [id]);

    return (
      <>
      <Breadcrumb title="Elaborados con la mejor materia prima del mercado" description="Los productos más ricos y saludables" />
      { loading ? 
      <div className="loader">
        <div className="loader-inner">
            <div className="circle"></div>
        </div>
      </div> : <ItemDetail item={item} /> }
      </>
    );
  };
  
  export default ItemDetailContainer;