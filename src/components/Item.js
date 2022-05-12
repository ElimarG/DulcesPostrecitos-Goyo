import React from 'react';
import ItemCount from './ItemCount';
import './main.css';

const Item = ({ id, title, price, image, stock, detail}) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} ${title} (${detail})`);
    };

    return (
        <div className="single-product-item">
            <div className="product-image">
                <a href="/"><img src={image} alt="" /></a>
            </div>
            <h3>{title}</h3>
            <p className="product-price"><span>{detail}</span> $ {price} </p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    );
  };
  
  export default Item;