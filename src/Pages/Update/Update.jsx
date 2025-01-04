import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import '../../Styles/support.css'

export default function Update() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="support-headers" style={{ height: "20%" }}>
        <p>
          We'll be here <span className="unique-font">Soon</span>.
        </p>
        <p style={{ lineHeight: "1.5" }}>
          Weekly updates of our trade will be shown here <br />
          stay tuned on the weekend.
        </p>
      </div>
    </div>
  );
}
