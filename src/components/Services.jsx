import packageBackground from "../assets/potplant.jpg";
import "../styles/Services.css";

const Services = () => {
  const handleSubscribeClick = () => {
    const modal = document.getElementById("subscriptionModal");
    modal.style.display = "block";
  };
  const handleCloseModal = () => {
    const modal = document.getElementById("subscriptionModal");
    modal.style.display = "none";
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      package: formData.get("package"),
      paymentMethod: formData.get("paymentMethod"),
    };
    alert(`Subscription submitted:\n${JSON.stringify(data, null, 2)}`);
    // to be sent to a server for processing handleCloseModal()
  };
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-section">
          <h3>Corporate Wellness Packages</h3>
          <div className="packages-grid" style={{ backgroundImage: `url(${packageBackground})` }}>
            <div className="package-card">
              <h4>Gold Package</h4>
              <p>A comprehensive mental health service that includes on-site counseling, mental health workshops, and customized wellness programs tailored to your organization's needs.</p>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card">
              <h4>Silver Package</h4>
              <p>Mental health assessments, virtual counseling sessions, and group workshops designed to support your employees' mental well-being.</p>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card">
              <h4>Bronze Package</h4>
              <p>Basic mental health awareness training and resources to help employees recognize and address mental health issues.</p>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="service-section">
          <h3>Client Engagement Strategies</h3>
          <ul>
            <li>Tailored surveys and assessment tools to understand client mindsets in key areas.</li>
            <li>Strategic insights to enhance client relationships and engagement.</li>
          </ul>
        </div>
        <div className="service-section">
          <h3>SME Mental Health Support</h3>
          <ul>
            <li>Affordable mental health services for SMEs, designed to boost employee productivity and business success.</li>
            <li>Support packages include counseling, mental health workshops, and continuous follow-up to ensure long-term benefits.</li>
          </ul>
        </div>
        <div className="service-section">
          <h3>Social Impact Programs</h3>
          <p>
            We are committed to making a difference beyond the corporate world. Our social impact programs include providing pro bono mental health services to underserved populations and offering free mental health awareness content through our social media platforms and webinars. We believe that mental health support should be accessible to everyone, regardless of their circumstances.
          </p>
        </div>
      </div>
      {/*Subscription Modal */}
      <div id="subscriptionModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <h3>Subscribe to a package</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="package">Select Package</label>
            <select name="package" id="package" required>
              <option value="">Select a package</option>
              <option value="Gold">Gold Package</option>
              <option value="Silver">Silver Package</option>
              <option value="Bronze">Bronze</option>
            </select>

            <label htmlFor="paymentMethod">Payment Method:</label>
            <div className="payment-options">
              <label htmlFor="option1">
                <input type="radio" name="paymentMethod" value="card" required />
                Credit/Debit Card
              </label>

              <label htmlFor="option2">
                <input type="radio" name="paymentMethod" value="mpesa" required />
                M-pesa
              </label>

              <label htmlFor="option3">
                <input type="radio" name="paymentMethod" value="bitcoin" required />
                Bitcoin
              </label>
            </div>
            <button type="submit">Submit Subscription</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services;