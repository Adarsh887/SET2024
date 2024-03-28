import React from "react";
import "../components/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer bg-dark text-light p-3">
      <div className="contactInfo">
        <div className="contactItem">
        <FontAwesomeIcon icon={faPhone} size="2x" /> <span>+91 44 3993 1555</span>
        </div>
        <div className="contactItem">
        <FontAwesomeIcon icon={faEnvelope} size="2x" /> <span>ncset@vit.ac.in</span>
        </div>
        <div className="contactItem">
        <FontAwesomeIcon icon={faLocation} size="2x" /> <span>Vellore Institute of Technology, Vandalur – Kelambakkam Road Chennai, Tamil Nadu – 600 127</span>
        </div>
      </div>
      <div className="socialMedia">
      <a href="https://www.instagram.com/vit.chennai/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className="p-2" /></a>

      <a href="https://www.facebook.com/VITCChennai" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className="p-2"/></a>

      <a href="https://twitter.com/ChennaiVit" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" className="p-2"/></a>

      </div>
      <p>All rights reserved by &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;

