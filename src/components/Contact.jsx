import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Contact.css";

const Contact = () => {
  useAnimateOnScroll();  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    alert(`Contact form submitted:\n${JSON.stringify(data, null, 2)}`);
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
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Your Company" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
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