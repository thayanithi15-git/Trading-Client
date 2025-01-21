import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Inputbox } from "../../Components/Input/Inputbox";
import { InputSelect } from "../../Components/Input/Inputbox";
import "../../Styles/support.css";

export default function Support() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    queryRelated: "",
    queryDescription: "",
  });
  const [loading, setLoading] = useState(false);

  // Check if the form is valid
  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for the query selection dropdown
  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      queryRelated: selectedOption ? selectedOption.value : "",
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxHtBLOhsTHtMBwA6v1fIkj6x00VUnMhw70jT7RKK5B-AJSr17tA0n0SvU14IlovpH9gw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Your query has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          contactNo: "",
          queryRelated: "",
          queryDescription: "",
        });
      } else {
        alert(`Failed to submit your query: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
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
        <div className="consecutive-line" style={{ marginTop: "25px" }}>
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
          <button type="submit" disabled={loading || !isFormValid()}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
