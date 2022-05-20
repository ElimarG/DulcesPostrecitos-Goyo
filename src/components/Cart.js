import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Cart = () => {
	return (
        <>
        <Breadcrumb title="Carrito" description="Horneamos todos los días" />
        <div className="cart-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="cart-table-wrap">
                            <table className="cart-table">
                                <thead className="cart-table-head">
                                    <tr className="table-head-row">
                                        <th className="product-remove"></th>
                                        <th className="product-image">Imagen</th>
                                        <th className="product-name">Producto</th>
                                        <th className="product-price">Precio</th>
                                        <th className="product-quantity">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="table-body-row">
									<td className="product-remove"><i><FontAwesomeIcon icon={faWindowClose} /></i></td>
									<td className="product-image"></td>
									<td className="product-name"></td>
									<td className="product-price">$</td>
									<td className="product-quantity"></td>
								</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="total-section">
                            <table className="total-table">
                                <thead className="total-table-head">
                                    <tr className="table-total-row">
                                        <th>Total</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="total-data">
                                        <td><strong>Subtotal: </strong></td>
                                        <td>$ </td>
                                    </tr>
                                    <tr className="total-data">
                                        <td><strong>Envío: </strong></td>
                                        <td>$ </td>
                                    </tr>
                                    <tr className="total-data">
                                        <td><strong>Total: </strong></td>
                                        <td>$ </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-buttons">
                                <Link className='boxed-btn Link' to="/">Actualizar</Link>
                                <Link className='boxed-btn black Link' to="/">Aceptar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default Cart;