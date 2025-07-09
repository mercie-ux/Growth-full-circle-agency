import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Contact.css";

const Contact = () => {
  useAnimateOnScroll();  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset(); // Clear the form
      } else {
        alert(`Error: ${result.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
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
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your Company" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
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