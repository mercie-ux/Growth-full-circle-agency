import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import packageBackground from "../assets/potplant.jpg";
import { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  useAnimateOnScroll();
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
      cardName: formData.get("cardName"),
      cardNumber: formData.get("cardNumber"),
      cardExpiry: formData.get("cardExpiry"),
      cardCVV: formData.get("cardCVV"),
      btcWallet: formData.get("btcWallet"),
      btcAmount: formData.get("btcAmount"),
      // card info
      cardName: formData.get("cardName") || null,
      cardNumber: formData.get("cardNumber") || null,
      expiry: formData.get("expiry") || null,
      cvv: formData.get("cvv") || null,
      // mpesa info
      mpesaPhone: formData.get("mpesaPhone") || null,
      mpesaCode: formData.get("mpesaCode") || null,
      // bitcoin info
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
        <h2 data-animate="fade-slide-up">Our Services</h2>
        <div className="service-section" data-animate="fade-slide-up">
          <h3>Corporate Wellness Packages</h3>
          <div className="packages-grid" style={{ backgroundImage: `url(${packageBackground})` }}>
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Gold Package</h4>
              <p>A comprehensive mental health service that includes on-site counseling, mental health workshops, and customized wellness programs tailored to your organization's needs.</p>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Silver Package</h4>
              <p>Mental health assessments, virtual counseling sessions, and group workshops designed to support your employees' mental well-being.</p>
              <button onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="package-card" data-animate="fade-slide-up">
              <h4>Bronze Package</h4>
              <p>Basic mental health awareness training and resources to help employees recognize and address mental health issues.</p>
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
            {selectedPaymentMethod && (
              <button type="submit" className="submit-payment-button">
                {`Pay with ${selectedPaymentMethod === 'mpesa' ? 'M-Pesa' : selectedPaymentMethod === 'card' ? 'Card' : 'Bitcoin'}`}
              </button>
            )}
            <button type="submit">Submit Subscription</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services;