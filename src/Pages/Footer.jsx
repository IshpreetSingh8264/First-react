import React from 'react';
import mastercardImage from './img/mastercard png.png';
import visaImage from './img/visapng.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="information">
            <h2>INFORMATION</h2>
            <ul>
              <li>
                <a href="#">
                  <span>Refunds</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Returns</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Shipping Policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Privacy and Cookies</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Disclaimer</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Terms & Conditions</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="information">
            <h2>FEATURED BRANDS</h2>
            <ul>
              <li>
                <a href="#">
                  <span>Barbie</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Disney</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Funskool</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Hot Wheels</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Lego</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Marvel</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Nerf</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="information">
            <h2>CATEGORIES</h2>
            <ul>
              <li>
                <a href="#">
                  <span>Toys and Games</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Baby Care & Gear</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Party Decorations</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Play & School Furniture</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Kids Books</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Action Figures</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Collectibles</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_content">
          <span>ⓒ2023 S M FUNCORP TOYS PRIVATE LIMITED</span>
          <ul>
            <li>
              <img src={mastercardImage} alt="Mastercard" />
            </li>
            <li>
              <img src={visaImage} alt="Visa" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;