import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import { CardStack } from "./CardStack";
import { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  useAnimateOnScroll();
  // our solutions
  const solutions = [
    {
      title: "Mental Health Support",
      description: "Comprehensive counseling and assessments to foster employee well-being.",
      image: "/images/image3.jpg",
    },
    {
      title: "Workplace Wellness ",
      description: "Tailored programs and workshops to enhance workplace mental health.",
      image: "/images/image4.jpg",
    },
    {
      title: "Community Impact",
      description: "Pro bono services and awareness content for underserved communities.",
      image: "/images/image7.jpg",
    },
  ];
  // packages data
  const goldPackageFeatures = [
    { title: "On-Site Counseling", description: "Professional mental health support provided at your workplace." },
    { title: "Mental Health Workshops", description: "Engaging sessions to promote well-being and awareness." },
    {
      title: "Customized Wellness Programs",
      description: "Tailored initiatives designed to meet the specific needs of your organization."
    },
  ];
  const silverPackageFeatures = [
    { title: "Mental Health Assessments", description: "Evaluations to understand and support employee mental health needs." },
    { title: "Virtual Counselling Sessions", description: "Remote access to professional mental health support." },
    { title: "Group Workshops", description: "Interactive sessions designed to enhance employees' mental well-being." },
  ];
  const bronzePackageFeatures = [
    { title: "Mental Health Awareness Training", description: "Educational sessions to help employees recognize mental health issues." },
    { title: "Mental Health Resources", description: "Tools and materials to support employees in addressing mental health concerns." },
  ];
  // state to track payment method selection
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handleSubscribeClick = () => {
    const modal = document.getElementById("subscriptionModal");
    modal.style.display = "block";
  };
  const handleCloseModal = () => {
    const modal = document.getElementById("subscriptionModal");
    modal.style.display = "none";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      package: formData.get("package"),
      paymentMethod: formData.get("paymentMethod"),
      mpesaPhone: formData.get("mpesaPhone"),
      mpesaCode: formData.get("mpesaCode"),
      cardName: formData.get("cardName") || null,
      cardNumber: formData.get("cardNumber") || null,
      cardExpiry: formData.get("cardExpiry") || null,
      cardCVV: formData.get("cardCVV") || null,
      btcWallet: formData.get("btcWallet") || null,
      btcAmount: formData.get("btcAmount") || null,

    };

    // send the form  data to the backend api
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Subscription successful!');
        handleCloseModal(); // close the modal after successful submission
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your subscription.');
    }
  };
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="header" data-animate="fade-slide-up">
          <div className="solutions-overview">
            <h3>Embark on a journey through our solutions.</h3>
            <CardStack items={solutions} />
          </div>
        </div>
        <h2 data-animate="fade-slide-up">Our Services</h2>
        <div className="service-section" data-animate="fade-slide-up">
          <h3>Corporate Wellness Packages</h3>
          <div className="packages-grid">
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Gold Package</h4>
              <ul>
                {goldPackageFeatures.map((feature, index) => (
                  <li key={index}>
                    ✅<strong>{feature.title}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Silver Package</h4>
              <ul>
                {silverPackageFeatures.map((feature, index) => (
                  <li key={index}>
                    ✅<strong>{feature.title}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Bronze Package</h4>
              <ul>
                {bronzePackageFeatures.map((feature, index) => (
                  <li key={index}>
                    ✅<strong>{feature.title}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="service-section" data-animate="fade-slide-up">
          <h3>Client Engagement Strategies</h3>
          <ul>
            <li>Tailored surveys and assessment tools to understand client mindsets in key areas.</li>
            <li>Strategic insights to enhance client relationships and engagement.</li>
          </ul>
        </div>
        <div className="service-section" data-animate="fade-slide-up">
          <h3>SME Mental Health Support</h3>
          <ul>
            <li>Affordable mental health services for SMEs, designed to boost employee productivity and business success.</li>
            <li>Support packages include counseling, mental health workshops, and continuous follow-up to ensure long-term benefits.</li>
          </ul>
        </div>
        <div className="service-section" data-animate="fade-slide-up">
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
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card" required
                  checked={selectedPaymentMethod === "card"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                Credit/Debit Card
              </label>

              <label htmlFor="option2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  required
                  checked={selectedPaymentMethod === "mpesa"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                M-pesa
              </label>

              <label htmlFor="option3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bitcoin"
                  required
                  checked={selectedPaymentMethod === "bitcoin"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                Bitcoin
              </label>
            </div>
            {/*Card Payment form */}
            {selectedPaymentMethod === "card" && (
              <div className="payment-popup card-form">
                <label htmlFor="cardName">Cardholder Name:</label>
                <input type="text" id="cardName" name="cardName" required />

                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" required />

                <label htmlFor="expiry">Expiry Date:</label>
                <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" required />

                <button type="submit">Pay with Card</button>
              </div>
            )}
            {selectedPaymentMethod === "mpesa" && (
              <div className="payment-popup mpesa-form">
                <label htmlFor="mpesaPhone">M-Pesa Phone Number:</label>
                <input type="tel" id="mpesaPhone" name="mpesaPhone" required />

                <label htmlFor="mpesaCode">Transaction Code (optional):</label>
                <input type="text" id="mpesaCode" name="mpesaCode" />

                <button type="submit">Pay with M-Pesa</button>
              </div>
            )}
            {selectedPaymentMethod === "bitcoin" && (
              <div className="payment-popup bitcoin-form">
                <label htmlFor="btcWallet">Your Bitcoin Wallet Address:</label>
                <input type="text" id="btcWallet" name="btcWallet" required />

                <label htmlFor="btcAmount">Amount in BTC (sats):</label>
                <input type="text" id="btcAmount" name="btcAmount" step="0.0001" required />

                <p>Please send the payment to the following address:</p>
                <code>bc1qyourwalletaddresshere</code>

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bitcoin:bc1qyourwalletaddresshere?amount=0.0005"
                  alt="Bitcoin QR Code"
                />

                <p>After sending, click the button below to complete the subscription.</p>

                <button type="submit">Confirm Bitcoin Payment</button>
              </div>
            )}
            {/* Common Payment Submit Button */}
            
            <button type="submit">Submit Subscription</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services;