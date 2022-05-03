import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
        <div className="header-icons">
            <a className="shopping-cart" href="/"><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
    );
  };
  
  export default CartWidget;
