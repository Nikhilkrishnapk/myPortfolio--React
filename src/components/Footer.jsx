import React from "react";
import "./cssforcomponents/Footer.css";
import LOGO from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div
            style={{
              width: "50px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className="img-fluid" src={LOGO} alt="" />
            Nikhil.
          </div>
          <p className="footer-para">
            Let's stay connected! Whether you have an exciting project, need
            assistance, or just want to chat, I'm always happy to connect. Feel
            free to reach out, and let's create something amazing together!
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <i style={{color:"#a0a0a0"}} class="fa-solid fa-user"></i>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        &#169; 2025 Nikhil Krishna Pk. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
