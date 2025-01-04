import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Styles/Home.css";
import Footer from "../../Components/Footer/Footer";
import Image1 from "../../assets/footer-logo.png"
import Image2 from "../../assets/infosys--600.png"
import Image3 from "../../assets/logo_hdfcbank.gif"
import Image4 from "../../assets/media-tata-motors-connecting-aspirations-Logo.jpg"
import Image5 from "../../assets/reliance-industrial-infrastructure--big.svg"
import Image6 from "../../assets/infosys-stock-price-live-updates-26-dec-2024.webp"
import Image7 from "../../assets/reliance.png"
import Image8 from "../../assets/bajaj.png"
import LeftImg from "../../assets/Bear Vs Bull.jpg"
import RightImg from "../../assets/bear.jpg"

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="home-headers">
        <p>
          Achieve more with <br />
          expert guided <span className="unique-font">courses</span>.
        </p>
        <p>
          Unlock the secrets to success with courses crafted to elevate your
          skills and ignite your potential.
        </p>
      </div>
      <div className="trusted-logos">
        <p>Trusted by some of the biggest brands:</p>
        <div className="moving-logos-wrapper">
    <div className="moving-logos">
        <div className="logos"><img src={Image6} alt="" style={{width: "80%"}}/></div>
        <div className="logos"><img src={Image1} alt="" style={{objectFit: "contain"}}/></div>
        {/* <div className="logos"><img src={Image3} alt="" /></div> */}
        <div className="logos"><img src={Image4} alt="" /></div>
        <div className="logos"><img src={Image7} alt="" /></div>
        <div className="logos"><img src={Image8} alt="" /></div>
        
    </div>
</div>

      </div>
      <div className="image_container">
        <div className="left-image">
          <img src={LeftImg} alt="" />
        </div>
        <div className="right-contents">
          {/* <br/> */}
          <p className="heading-first">
            We offer specialized training programs tailored to the Indian
            trading market, including:
          </p>
          <div className="description">
            <div>
              <p className="sub-heading">Stock Market Basics:</p>
              <p className="sub-contents">
                Master the fundamentals of equity trading and investing.
              </p>
            </div>
            <div>
              <p className="sub-heading">Technical Analysis:</p>
              <p className="sub-contents">
                Learn chart patterns, indicators, and strategies to predict
                market movements.{" "}
              </p>
            </div>
            <div>
              <p className="sub-heading">Derivative Trading:</p>
              <p className="sub-contents">
                Dive into futures, options, and risk management techniques.{" "}
              </p>
            </div>
            <div>
              <p className="sub-heading">Fundamental Analysis:</p>
              <p className="sub-contents">
                Understand company valuations, financial statements, and market
                trends.{" "}
              </p>
            </div>
            <div>
              <p className="sub-heading">Live Market Training:</p>
              <p className="sub-contents">
                Practice real-time trading with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image_container_second">
        <div className="left-contents">
          <p className="heading">Trading Signals:</p>
          <br/>
          <div className="description">
            <div>
              <p className="sub-heading">Live Trade Signals:</p>
              <p className="sub-contents">
                Real-time trade signals designed for swing trading, positional
                trading, and long-term investments. Ensures timely and
                actionable insights for all types of traders and investors.
              </p>
            </div>
            <div>
              <p className="sub-heading">Proven Accuracy:</p>
              <p className="sub-contents">
                Achieve over 75% accuracy with our expert analysis. Backed by
                data-driven strategies to minimize risks and maximize
                opportunities.
              </p>
            </div>
            <div>
              <p className="sub-heading">Optimal Risk-to-Reward Ratio:</p>
              <p className="sub-contents">
                Enjoy an average risk-to-reward ratio of 1:2 to 1:2.5, ensuring
                sustainable trading performance. Focus on protecting capital
                while capturing larger profits.
              </p>
            </div>
            {/* <div>
              <p className="sub-heading">Fundamental Analysis:</p>
              <p className="sub-contents">
                Understand company valuations, financial statements, and market
                trends.{" "}
              </p>
            </div> */}
            <div>
              <p className="sub-heading">Consistent Returns:</p>
              <p className="sub-contents">
                Generate 10-15%+ average monthly returns consistently since our
                inception. Designed to help you achieve your financial growth
                targets with reliable strategies.
              </p>
            </div>
            <div>
              <p className="sub-heading">Expert Guidance:</p>
              <p className="sub-contents">
                Created for both beginners looking to start strong and
                experienced traders seeking an edge. We simplify trading
                complexities, making the market accessible to everyone.
              </p>
            </div>
            <div>
              <p className="sub-heading">Comprehensive Coverage:</p>
              <p className="sub-contents">
                Signals cover a range of market opportunities to suit your
                preferred trading style and investment goals.
              </p>
            </div>
          </div>
        </div>
        <div className="right-image">
          <img src={RightImg} alt="" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
