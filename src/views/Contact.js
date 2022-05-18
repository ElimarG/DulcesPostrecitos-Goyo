import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faClock, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from '../components/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css';

const Contact = () => {
	return (
        <>
        <Breadcrumb title="Contacto" description="Horneamos todos los días" />
        <div className="contact-from-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="form-title">
                            <h2>¿Tienes alguna pregunta?</h2>
                            <p>Envíanos un mensaje o tambien te esperamos de Lunes a Sabados de 10 a 18hs</p>
                        </div>
                        <div id="form_status"></div>
                        <div className="contact-form">
                            <form id="dp-contact">
                                <p>
                                    <input type="text" placeholder="Nombre" name="name" id="name" />
                                    <input type="email" placeholder="Email" name="email" id="email" />
                                </p>
                                <p>
                                    <input type="tel" placeholder="Telefono" name="phone" id="phone" />
                                    <input type="text" placeholder="Asunto" name="subject" id="subject" />
                                </p>
                                <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea></p>
                                <p><input type="submit" value="Enviar" /></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form-wrap">
                            <div className="contact-form-box">
                                <h4><i><FontAwesomeIcon icon={faMap} /></i> Dirección de la tienda</h4>
                                <p>Calle 000 <br /> Local 22. <br /> Buenos Aires</p>
                            </div>
                            <div className="contact-form-box">
                                <h4><i><FontAwesomeIcon icon={faClock} /></i> Horario</h4>
                                <p>LUN - SAB: 10 a 18 HRS <br /> DOM: Cerrado</p>
                            </div>
                            <div className="contact-form-box">
                                <h4><i><FontAwesomeIcon icon={faAddressBook} /></i> Contacto</h4>
                                <p>Telefono: +00 111 222 3333 <br /> Email: info@dulcespostrecitos.com.ar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default Contact;