import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Inputbox } from "../../Components/Input/Inputbox";
import emailjs from "emailjs-com";
import "../../Styles/book.css";

export default function Book() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNo: "",
    plan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_buz8g9q", // Replace with your EmailJS Service ID
        "template_g4dsgae", // Replace with your EmailJS Template ID
        formData, // Form data to send
        "OQZx0S6rCjKUMQH6U" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert(
            "Your call has been Booked Succesfully. Our Expert team will contact you within 72 business hours!"
          );
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="support-headers">
        <p>
          Get in <span className="unique-font">touch</span>.
        </p>
        <p style={{ lineHeight: "1.5" }}>
          Ready to scale your brand to new heights? Book a call and <br />
          let’s discuss how we can bring your vision to life.
        </p>
      </div>
      <div className="input-container-bookcall">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <p>Fullname</p>
            <Inputbox
              placeholder="Peter Parker"
              height="40px"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <p>Email</p>
            <Inputbox
              placeholder="peter@parker.com"
              height="40px"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <p>ContactNo</p>
            <Inputbox
              placeholder="+91 00000 00000"
              height="40px"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <p>Plan</p>
            <div className="radio-cards-section">
              <div className="radio-card">
                <center>
                  <div style={{ marginBottom: "10px" }}>
                    <input
                      type="radio"
                      id="course"
                      name="plan"
                      value="Buy Courses"
                      onChange={handleChange}
                    />
                    <label
                      className="radio-label"
                      htmlFor="course"
                      style={{ marginBottom: "30px" }}
                    />
                  </div>
                  <h3>Buy Courses</h3>
                  <p>
                    Support team will be reaching you shortly and payment will
                    be done there.
                  </p>
                </center>
              </div>

              <div className="radio-card">
                <center>
                  <div style={{ marginBottom: "10px" }}>
                    <input
                      type="radio"
                      id="signals"
                      name="plan"
                      value="Join Signal Room"
                      onChange={handleChange}
                    />
                    <label
                      className="radio-label"
                      htmlFor="signals"
                      style={{ marginBottom: "30px" }}
                    />
                  </div>
                  <h3>Join Signal Room</h3>
                  <p>
                    Support team will call you and provide the documents and
                    screenshots for the support.
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
