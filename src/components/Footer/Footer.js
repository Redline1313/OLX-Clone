import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import box from "../../assets/badge.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>POPULAR </h3>
            <p>
              <a href="#">Cars</a>
            </p>
            <p>
              <a href="#">Flats for rent</a>
            </p>
            <p>
              <a href="#">Mobile Phones</a>
            </p>
            <p>
              <a href="#">Jobs</a>
            </p>
          </div>
          <div class="footer-section">
            <h3>TRENDING SEARCHES</h3>
            <p>
              <a href="#">Bikes</a>
            </p>
            <p>
              <a href="#">Watches</a>
            </p>

            <p>
              <a href="#">Books</a>
            </p>
            <p>
              <a href="#">Dogs</a>
            </p>
          </div>
          <div class="footer-section">
            <h3>About Us</h3>
            <p>
              <a href="#">About Dubizzle Group</a>
            </p>
            <p>
              <a href="#">OLX Blog</a>
            </p>
            <p>
              <a href="#">Contact Us</a>
            </p>
            <p>
              <a href="#">OLX for Businesses</a>
            </p>
          </div>
          <div class="footer-section">
            <h3> OLX </h3>
            <p>
              <a href="#">Help</a>
            </p>
            <p>
              <a href="#">Sitemap</a>
            </p>
            <p>
              <a href="#">Terms of use</a>
            </p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <div className="badge">
              <a href="https://play.google.com/store/games">
                <img src={box} alt="Box" />
              </a>
              <a href="https://play.google.com/store/games">
                <img src={box} alt="Box" />
              </a>
              <a href="https://play.google.com/store/games">
                <img src={box} alt="Box" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            <b>Free Classifieds in Pakistan</b>
          </p>
          <p>&copy; 2023 OLX</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
