import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../../Components/Navbar/Navbar";
import { Inputbox } from "../../Components/Input/Inputbox";
import { InputSelect } from "../../Components/Input/Inputbox";
import '../../Styles/support.css';

export default function Support() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    queryRelated: "",
    queryDescription: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      queryRelated: selectedOption ? selectedOption.value : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = { ...formData };

    emailjs
      .send(
        "service_buz8g9q", // Replace with your Service ID
        "template_hyy8w8p", // Replace with your Template ID
        emailData, // Data to be sent in the email
        "OQZx0S6rCjKUMQH6U" // Replace with your Public Key
      )
      .then(
        (response) => {
          alert("Your query has been sent, our team will contact you within 72 business working hours");
        },
        (error) => {
          console.error("Failed to send email.", error);
          alert("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="support-headers" style={{ height: "20%" }}>
        <p>
          Get in <span className="unique-font">touch</span>.
        </p>
        <p style={{ lineHeight: "1.5" }}>
          Ready to scale your brand to new heights? Book a call and <br />
          let’s discuss how we can bring your vision to life.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="input-container">
        <div className="consecutive-line" style={{ marginTop: '25px' }}>
          <div style={{ width: "100%" }}>
            <p>Full Name</p>
            <div style={{ marginTop: "12px" }}>
              <Inputbox
                placeholder="Peter Parker"
                height="40px"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="consecutive-line">
          <div style={{ width: "100%" }}>
            <p>Email</p>
            <div style={{ marginTop: "12px" }}>
              <Inputbox
                placeholder="peter@parker.com"
                height="40px"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="consecutive-line">
          <div style={{ width: "100%" }}>
            <p>Contact No</p>
            <div style={{ marginTop: "12px" }}>
              <Inputbox
                placeholder="+91 00000 00000"
                height="40px"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="consecutive-line">
          <div style={{ width: "100%" }}>
            <p>Query Related</p>
            <div style={{ marginTop: "12px" }}>
              <InputSelect
                value={formData.queryRelated}
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
        <div className="consecutive-line">
          <div style={{ width: "100%" }}>
            <p>Query Description</p>
            <div style={{ marginTop: "12px" }}>
              <Inputbox
                placeholder="Write about your query..."
                height="40px"
                name="queryDescription"
                value={formData.queryDescription}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="button-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
