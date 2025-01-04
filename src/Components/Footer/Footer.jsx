import React from "react";
import "../../Styles/footer.css"; // Import the CSS file
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Import social media icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Trading Academy Branding */}
        <pre>
          <p className="footer-branding">
            Bull and Bear{" "}
            <span className="unique-font" style={{ fontSize: "27px" }}>
              Academy
            </span>
            .<br />                             <span style={{ fontSize: "15px" }}>- PRITHIV</span>
          </p>
        </pre>
        <p className="footer-description">
          Empowering traders and investors with advanced tools, actionable
          strategies, and comprehensive education to achieve success in dynamic
          financial markets.
        </p>

        {/* Disclaimer Section */}
        <div className="footer-disclaimer">
          <h5 className="footer-disclaimer-title">Disclaimer</h5>
          <p className="footer-disclaimer-text">
            Past performance is not indicative of future results. Trading and
            investing involve significant risk, and returns are not guaranteed.
            While we strive to provide accurate and reliable signals, market
            conditions can change rapidly and unpredictably, affecting the
            outcome of any trade or investment. Users are advised to exercise
            their own judgment, consider their financial situation, and seek
            professional advice if necessary. All information provided is for
            educational purposes only and should not be construed as financial
            advice.
          </p>
        </div>

        {/* Social Media and Navigation */}
        <div className="footer-social">
          <p className="footer-social-title">Follow us on:</p>
          <div className="footer-social-links">
            <a href="#" className="footer-social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-social-link">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Trading Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
