import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Contact.css";
import { useState } from "react";

const Contact = () => {
  useAnimateOnScroll();
  const [status, setStatus] = useState(null); // success | error | loading

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://growth-full-circle-agency.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus(result.error || "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 data-animate="fade-slide-up">Contact Us</h2>
        <div className="contact-grid" data-animate="fade-slide-up">
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status === "success" && <p className="success-msg">Thank you! We’ll get back to you soon.</p>}
            {status === "error" && <p className="error-msg">Something went wrong. Try again later.</p>}
          </div>

          <div className="contact-info" data-animate="fade-slide-up">
            <img width="300px" height="200px" src="/contact-us.jpg" alt="contact" />
            <h3>Contact Information</h3>
            <p>
              <strong>Email: </strong>growthfullcircleagencies@gmail.com
            </p>
            <p>
              <strong>Phone Number:</strong> +254 727 092988
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
