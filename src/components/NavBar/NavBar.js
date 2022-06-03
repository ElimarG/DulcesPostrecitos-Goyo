import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.png';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const Navbar = () => {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item"><Link className='Link' to='/'>Inicio</Link></li>
                                    <li><Link className='Link' to="/about">Nosotros</Link></li>
                                    <li><Link className='Link' to="">Productos</Link>
                                        <ul className="sub-menu">
                                            <li><Link className='Link' to="/category/cake">Tortas</Link></li>
                                            <li><Link className='Link' to="/category/cupcake">CupCake</Link></li>
                                            <li><Link className='Link' to="/category/cookie">Galletas</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className='Link' to="/contact">Contacto</Link></li>
                                    <li>
                                        <Link className='shopping-cart Link' to="/cart">
                                            <CartWidget />
                                        </Link>
								    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Navbar;