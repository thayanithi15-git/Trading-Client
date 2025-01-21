import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Inputbox } from "../../Components/Input/Inputbox";

export default function Book() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNo: "",
    plan: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" }); // Clear error for the specific field
  };

  const validateForm = () => {
    const newError = {};
    if (!formData.firstName) newError.firstName = "Fullname is required.";
    if (!formData.email) newError.email = "Email is required.";
    if (!formData.contactNo) newError.contactNo = "Contact number is required.";
    if (!formData.plan) newError.plan = "Please select a plan.";

    setError(newError);

    return Object.keys(newError).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Set loading to true when form submission starts

    const googleAppScriptUrl =
      "https://script.google.com/macros/s/AKfycbz-7AQoYJ4vs3Qw9VXIJe2Kw1VgPsBUVcKmqzMsj4385VO7VB-jCvaz_YfJPdG9wO_nmQ/exec"; // Replace with your Google Apps Script Web App URL

    fetch(googleAppScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          alert(
            "Your call has been booked successfully. Our Expert team will contact you within 72 business hours!"
          );
          setFormData({
            firstName: "",
            email: "",
            contactNo: "",
            plan: "",
          });
        } else {
          alert(`Failed to submit your data: ${result.message}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Reset loading state after submission completes
      });
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
          <div className="input-box" style={{ marginBottom: "20px" }}>
            <p>Fullname</p>
            <Inputbox
              placeholder="Peter Parker"
              height="40px"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-box" style={{ marginBottom: "20px" }}>
            <p>Email</p>
            <Inputbox
              placeholder="peter@parker.com"
              height="40px"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box" style={{ marginBottom: "20px" }}>
            <p>ContactNo</p>
            <Inputbox
              placeholder="+91 00000 00000"
              height="40px"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </div>
          <div className="input-box" style={{ marginBottom: "20px" }}>
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

          {/* Error messages displayed above the submit button */}
          {(error.firstName || error.email || error.contactNo || error.plan) && (
            <div
              style={{
                marginBottom: "10px",
                color: "red",
                fontSize: "14px",
              }}
            >
              {error.firstName && <p>{error.firstName}</p>}
              {error.email && <p>{error.email}</p>}
              {error.contactNo && <p>{error.contactNo}</p>}
              {error.plan && <p>{error.plan}</p>}
            </div>
          )}

          <div className="button-submit">
            <button
              type="submit"
              style={{
                backgroundColor: loading ? "#ccc" : "", // Keep color unchanged while submitting
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
