import { useEffect } from "react";
import backgroundImage from "../assets/image1.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
   // Sample testimonials
   const testimonials = [
    {
      text: "Growth Full Circle transformed our workplace with their wellness programs. Highly recommend!",
      author: "Janet Waruru, CEO of HealthCorp",
    },
    {
      text: "The pro bono services made a huge difference in our community. Thank you!",
      author: "John Smith, Community Leader",
    },
  ];
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    <section id="home" className="home">
      { /* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Growth360: Cultivating Mental Wellness, Empowering Businesses.</h1>
          <Link to="/services" className="cta-button">
            Explore Services
          </Link>
        </div>
      </div>
      <div className="home-text" data-animate="fade-slide-up">
          <p>
          At Growth Full Circle Agencies, we believe that <span className="highlight">mental well-being</span> is the <span className="highlight">cornerstone</span> 
          of <span className="highlight">business success</span> and <span className="highlight">community flourishing</span>. 
          Our <span className="highlight">comprehensive mental health</span> and 
          <span className="highlight">corporate wellness solutions</span> are designed to <span className="highlight">empower your employees</span> and 
          <span className="highlight">elevate your business</span>. Beyond our corporate focus, we are <span className="highlight">deeply committed</span> 
          to giving back to society through <span className="highlight">pro bono services</span>, 
          <span className="highlight">mental health awareness initiatives</span>, and <span className="highlight">community outreach</span>.
          </p>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <div className="home-stats">
            <div className="stats1">
              <span>80%</span>
              <p>USERS SIGNIFICANT</p>
            </div>
            <div className="stats2">
              <span>60+</span>
              <p>ORGANIZATION TRUST</p>
            </div>
            <div className="stats2">
              <span>2000</span>
              <p>USER SATISFACTION</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Services Section */}
      <div className="key-services" data-animate="fade-slide-up">
        <h2>Key Services</h2>
        <div className="services-grid">
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80px" height="80px" src="/src/assets/package1.svg" alt="" />
            <h3>Corporate Wellness Packages</h3>
            <p>Tailored programs designed to meet the unique needs of your business.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80px" height="80px" src="/src/assets/service1.svg" alt="" />
            <h3>Client Engagement Strategies</h3>
            <p>Innovative approaches to understanding and engaging your clients.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80px" height="80px" src="/src/assets/support.svg" alt="" />
            <h3>SME Mental Health Support</h3>
            <p>Subsidized services that enhance productivity and business resilience.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="100px" height="100px" src="/src/assets/social1.svg" alt="" />
            <h3>Social Impact Initiatives</h3>
            <p>Pro bono mental health services and free awareness content on our platforms.</p>
          </div>
        </div>
      </div>
      <div className="footer-section testimonials" data-animate="fade-slide-up">
          <h3>Testimonials</h3>
          <div className="testimonial-container" >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial" data-animate="fade-slide-up">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Home;