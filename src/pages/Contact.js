import React, { useState } from "react";
import ContactInfo from "../components/contact/ContactInfo";
import "../components/contact/ContactUs.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields");
      return; // stop the function if validation fails
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      //toast.error("Please enter a valid email address");
      return; // stop the function if validation fails
    }

    setLoading(true);
    setError("");

    try {
      // Send contact data to the backend
      const contactResponse = await axios.post(
        "http://localhost:8080/api/frontend/contact",
        {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
        {
          withCredentials: true,
        }
      );

      console.log("Contact: ", contactResponse.data);

      // Prepare email data
      const mailData = {
        to: "saurabhprajapati120@gmail.com",
        subject: "Contact Form Submitted",
        message: `<html>
        <head>
          <title>New Contact Form Submission</title>
        </head>
        <body>
          <h1>New Contact Form Submission</h1>
          <p>A new contact form submission has been received:</p>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Message: ${message}</li>
            <li>Message: Source: ThitaInfo</li>
          </ul>
          <p>Please follow up with the individual as soon as possible.</p>
        </body>
      </html>`,
      };

      // Send email data to the backend
      const mailResponse = await axios.post(
        "http://localhost:8080/api/mail/sendHtmlEmail",
        mailData,
        {
          withCredentials: true,
        }
      );

      console.log("Mail response: ", mailResponse.data);

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
              <a href="index.html">Home</a>
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
