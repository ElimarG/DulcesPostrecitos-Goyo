import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

	return (
        <>
        <Breadcrumb title="Carrito" description="Horneamos todos los días" />
        { cart.length ? (
            <div className="cart-section mt-100 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove"></th>
                                            <th className="product-image">Imagen</th>
                                            <th className="product-name">Producto</th>
                                            <th className="product-price">Precio</th>
                                            <th className="product-quantity">Cantidad</th>
                                            <th className="product-price">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { cart ? (cart.map(product => {
                                        return(
                                            <tr className="table-body-row" key={product.id}>
                                                <td className="product-remove"><i onClick={()=>removeItem(product.id)}><FontAwesomeIcon icon={faWindowClose} /></i></td>
                                                <td className="product-image"><img src={product.image} alt="" /></td>
                                                <td className="product-name">{product.title}</td>
                                                <td className="product-price">${product.price}</td>
                                                <td className="product-quantity">{product.quantity}</td>
                                                <td className="product-price">${product.quantity * product.price}</td>
                                            </tr>
                                            );
                                        }))
                                        :   <div className="loader">
                                                <div className="loader-inner">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="total-section">
                                <div className="cart-buttons">
                                    <button type="button" className="cart-btn" onClick={clearCart}>Vaciar</button>
                                    <Link className='boxed-btn black Link' to="/">Aceptar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        : 
        <div className="more-products mt-100">
            <div className="container">
			    <div className="row">
				    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3><span className="orange-text">No hay productos </span> en el carrito</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
	);
};

export default Cart;