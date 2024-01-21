import React, { useState } from "react";
import ContactInfo from "../components/contact/ContactInfo";
import "../components/contact/ContactUs.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/index";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields");
      return; // stop the function if validation fails
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send contact data to the backend
      await axios.post(
        `${API_URL}/contact/send`,
        {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          source: "Thita Website",
        },
        {
          withCredentials: true,
        }
      );
      // Reset form data and show success message
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      //toast.success("Mail/Message sent successfully");
    } catch (error) {
      setLoading(false);
      setError("Error sending message");
      //toast.error("Error sending message" + error.message);
    }
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>contactus</li>
          </ol>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-us">
          <div className="contact-us-content">
            <ContactInfo />
            <div className="contact-us-form">
              <h2 className="contact-us-form-header">
                We Want to Hear From You
              </h2>
              <form onSubmit={handleSubmit}>
                {error && <div className="contact-us-form-error">{error}</div>}
                <div className="contact-us-form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="contact-us-form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="contact-us-form-group">
                  <textarea
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="contact-us-form-group">
                  <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
