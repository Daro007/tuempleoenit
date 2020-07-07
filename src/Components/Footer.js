import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p className="footer-sello">Tu empleo en IT</p>
        <p className="copyright">© Copyright 2020</p>
      </div>
      <div className="links-footer">
        <a className="linkfooter" href="https://www.google.com/">
          Quienes somos
        </a>
        <br />
        <a className="linkfooter" href="https://www.google.com/">
          Contacto
        </a>
        <br />
        <a className="linkfooter" href="https://www.google.com/">
          Aviso Legal
        </a>
        <br />
        <a className="linkfooter" href="https://www.google.com/">
          Política de Privacidad y Cookies
        </a>
        <br />
        <a className="linkfooter" href="https://www.google.com/">
          <FaLinkedin className="footer-icon" />{" "}
          <FaTwitterSquare className="footer-icon" />{" "}
          <FaFacebookSquare className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
