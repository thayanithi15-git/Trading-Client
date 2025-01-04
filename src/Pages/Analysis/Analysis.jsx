import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import StockMarketGraph from "../../Components/Graph/Graph";
import '../../Styles/analysis.css'
import { Inputbox } from "../../Components/Input/Inputbox";

export default function Analysis() {
  return (
    <div style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="support-headers" style={{ height: "20%" }}>
        <p>
        Explore Insights with <span className="unique-font">Analysis</span>.
        </p>
        <p style={{ lineHeight: "1.5", marginTop: "10px"}}>
        Dive deep into your data, track performance, and uncover insights that drive decisions. <br/>
        Ready to take your brand's growth to the next level? Let’s start the conversation.
        </p>
      </div>
      <div className="analysis-search">
        <div className="analysis-search-content">
            <Inputbox placeholder={"Enter any ticker to view Graph"} search={true} height={"40px"}/>
            <button>Search</button>
        </div>
      </div>
      <div className="graph">
            <StockMarketGraph/>
        </div>
    </div>
  );
}
