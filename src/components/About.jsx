import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import { useState, useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useAnimateOnScroll();
  // Array of images for the slideshow
  const images = [
    "/images/therapy.jpg",
    "/images/therapy1.jpg",
    "/images/therapy2.jpg",
    "/images/therapy3.jpg",
    "/images/therapy4.jpg",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // UseEffect to handle the slideshow timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section id="about" className="about">
      {/* Slideshow Section */}
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`About Us Slide ${index + 1}`}
            className={`slideshow-image ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Existing About Us Content */}
      <div className="container">
        <h2 data-animate="fade-slide-up">About Us</h2>
        <div className="story-mission" data-animate="fade-slide-up">
          <div className="story">
            <h3>Our Story</h3>
            <p>
              Founded with a <span className="highlight">vision to bridge the gap</span> in mental health services 
              within the corporate world and beyond, Growth Full Circle Agencies has been dedicated to enhancing mental health awareness 
              and well-being for over 5 years. Our team is committed to delivering <span className="highlight">impactful wellness programs</span> tailored to the unique needs of each client while also giving back to society through pro bono services and community outreach.
            </p>
          </div>
          <div className="mission" data-animate="fade-slide-up">
            <h3>Mission Statement</h3>
            <p>
              Our mission is to <span className="highlight">foster a culture</span> of mental well-being within businesses 
              and communities by providing accessible and tailored wellness solutions that 
              improve productivity, employee satisfaction, and overall business success. 
              We are equally dedicated to <span className="highlight">uplifting</span> the broader community through our social initiatives, 
              <span className="highlight">offering free mental health</span> resources and support to those who need it most.
            </p>
          </div>
        </div>
        <div className="values" data-animate="fade-slide-up">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <img width="60" height="60" src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-empathy-life-skill-becris-lineal-color-becris.png" alt="external-empathy-life-skill-becris-lineal-color-becris"/>
              <h4>Empathy</h4>
              <p>We understand the challenges faced by businesses, employees, and communities, approaching every project with compassion and understanding.</p>
            </div>
            <div className="value-card">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/light-automation.png" alt="light-automation"/>
              <h4>Innovation</h4>
              <p>We deliver cutting-edge, evidence-based programs that evolve with the needs of our clients and society.</p>
            </div>
            <div className="value-card">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/weight-care.png" alt="weight-care"/>
              <h4>Integrity</h4>
              <p>We uphold the highest ethical standards in all our engagements, with a firm commitment to social responsibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;