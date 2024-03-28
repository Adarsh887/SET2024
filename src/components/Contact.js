import React from 'react';
import { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
//import axios from 'axios';


function Contact() {

        return (
        <div className='parent' >
            <Header />
            <div className='content bg-light text-dark pt-2 overflow-hidden pt-xl-5 pt-lg-5 h-100' >
                <div className="row">
                    <div className='squareBox'>
                        <div className='container text-center p-5'>
                            <h1 className='display-4 pb-3'>Contact Us</h1>
                            <h2 className='h4 pb-2'>Contact Information</h2>
                            <div className="py-1"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;&nbsp;+91 44 3993 1555</div>
                            <div className="py-1"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;<a href='mailto:' className='text-decoration-none text-dark'>ncset@vit.ac.in</a></div>
                            <div className="py-1"><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;&nbsp;Vellore Institute of Technology, Vandalur – Kelambakkam Road Chennai, Tamil Nadu – 600 127</div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;