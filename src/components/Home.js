import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Image0 from "../assets/3im.png"
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Register from "../assets/Register.jpg";
import Imp from "../assets/Imp.jpg";
import './styles.css';

function Home() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: Image0
    },
    {
      id: 2,
      url: Image1
    },
    {
      id: 3,
      url: Image3
    },
    {
      id: 4,
      url: Image4
    },
    {
      id: 5,
      url: Image5
    },
    {
      id: 6,
      url: Image2
    }
  ];

  return (
    <div className='parent'>
      <Header />
      <div className='content bg-light text-dark'>
        <div className="w-100 p-5 ">
          <div className="text-center">
            <h1 className="display-2">International Conference on Science Engineering & Technology (SET)</h1>
            <p className="lead">Innovate for Progress, Build for Tomorrow!</p>
          </div>

          <div>
            <div className="App">
              <button
                className="nav-btn"
                onClick={() => {
                  const container = sliderRef.current;
                  container.scrollLeft -= scrollAmount;
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </button>
              <div className="images-container" ref={sliderRef}>
                {images.map((image) => (
                  <img
                    className="image"
                    alt="sliderImage"
                    key={image.id} // Use image.id directly for key
                    src={image.url}
                  />
                ))}
              </div>
              <button
                className="nav-btn"
                onClick={() => {
                  const container = sliderRef.current;
                  container.scrollLeft += scrollAmount;
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </button>
            </div>
          </div>

          <div className='container'>
            <h2 className="mt-5 text-center">Featured Events</h2>
            <div className="d-flex flex-wrap justify-content-center">
                <CCard style={{ width: '18rem' }} className="m-5 b-3 p-2">
                    <CCardImage orientation="top" src={Register} />
                    <CCardBody>
                    <CCardTitle>Register Now!!</CCardTitle>
                    
                    <CButton color="primary" href="https://forms.gle/z5cHpt31oHVqp8eC7" target='_blank'>Click Here</CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }} className="m-5 b-3 p-2">
                    <CCardImage orientation="top" src={Imp} />
                    <CCardBody>
                    <CCardTitle>Important dates</CCardTitle>

                    <CButton color="primary" ><Link to="/important_dates" className="nav-link">Click here</Link></CButton>
                    </CCardBody>
                </CCard>
            </div>
          </div>
          <h2 className="mt-5 display-5 text-center">About Us</h2>
          <p className='text-center w-60'>
          VIT Chennai is a globally engaged, competitive, comprehensive,
          and research-enriched campus strategically positioned in the
          capital city of Tamil Nadu, to respond to major industrial, social,
          economic and environmental demands and challenges. It has
          been a pioneer in the transformation of higher education in the
          country by introducing application-based learning to produce
          industry ready professionals. The campus has a cosmopolitan
          atmosphere with students from all parts of the globe. VIT
          Chennai is ably spearheaded by Vice Presidents, Mr. Sankar
          Viswanathan, Dr. Sekar Viswanathan, Dr. G.V. Selvam, and Vice
          Chancellor Dr. V.S. Kanchana Bhaaskaran. They share in the
          mission to make VIT a global center.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
